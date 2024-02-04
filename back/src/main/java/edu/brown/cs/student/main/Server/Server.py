from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests

from flask import Flask, render_template, redirect, url_for, session, flash, after_this_request, make_response
from flask_wtf import FlaskForm, CSRFProtect
from wtforms import StringField, PasswordField, SubmitField, validators
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user

import sqlite3

app = Flask(__name__)
# CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) for all routes
CORS(app, origins="http://localhost:3000", supports_credentials=True)
csrf=CSRFProtect(app)
app.config['WTF_CSRF_ENABLED'] = False


# # Initialize static variables
# parsed_loaded_csv = []
# parsed_loaded_json = {}
# state_code = {}


def insertUser(username, password):
    # maybe try & err
    # need hash to passward for security
    con = sqlite3.connect("database.db")
	cur = con.cursor()
    cur.execute("INSERT INTO users (username,pwd) VALUES (?,?)", (username, password))
    con.commit()
    con.close()

def insertInterests(user_id, interests):
    con = sqlite3.connect("database.db")
	cur = con.cursor()
    cur.execute("UPDATE users SET interests=? WHERE user_id=?"), (interests, user_id)
    con.commit()
    con.close()


def retrieveUsers():
	con = sqlite3.connect("database.db")
	cur = con.cursor()
	cur.execute("SELECT user_id, username, pwd FROM users")
	users = cur.fetchall()
	con.close()
	return users


@app.route('/')
def home():

    return render_template('index.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

@app.route('/checkweather', methods=['GET'])
def check_weather():
    # Implement the logic for loading the CSV file
    # You can use request.args to get query parameters if needed
    api_key=f"53b068ebdeed4756a3c64249240302" # do we want future predictions/what parameters should user be able to enter
    request_url = f"http://api.weatherapi.com/v1/current.json?key=53b068ebdeed4756a3c64249240302&q=Providence&aqi=no"
    response = connect(request_url)
    body = response.json()
    current = body["current"]
    return current
    #return str(current["is_day"])    
    # return jsonify({"message": "CSV loaded successfully"})
    

@staticmethod
def connect(request_url):
    url_connection = requests.get(request_url)
    return url_connection


app.secret_key = 'supersecretkey'  # Change this to a secure secret key

class LoginForm(FlaskForm):
    username = StringField('Username', [validators.InputRequired()])
    password = PasswordField('Password', [validators.InputRequired()])
    submit = SubmitField('Login')

class RegistrationForm(FlaskForm):
    username = StringField('Username', [validators.InputRequired()])
    password = PasswordField('Password', [validators.InputRequired()])
    confirm_password = PasswordField('Confirm Password', [validators.InputRequired(), validators.EqualTo('password', message='Passwords must match')])
    submit = SubmitField('Register')


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        users = retrieveUsers()
        # user authentication logic
        cur_user = None
        for user in users: 
            if user[1] == username: 
                cur_user = user
                break

        if cur_user:
            if cur_user[2] == password:
                session['logged_in'] = True
                session['user_id'] = cur_user[0]
                return jsonify({"status": "success"})
        else:
            return jsonify({"status": "error_incorrect_login"})
    else:
        print("form validation failed")

    return render_template('login.html', form=form)

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    session.pop('user_id', None) 
    return redirect(url_for('home'))

@app.route('/dashboard')
def dashboard():
    if 'logged_in' in session and session['logged_in']:
        return 'Welcome to the Dashboard!'
    else:
        flash('You need to login first.', 'warning')
        return redirect(url_for('login'))


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()

    if form.validate_on_submit():
        print("form validaton passed")
        username = form.username.data
        password = form.password.data


        # user registration logic
        users = retrieveUsers()
        existing = False
        for user in users: 
            if user[1] == username: 
                existing = True
                break

        if not existing:
            insertUser(username, password)
            return jsonify({"status": "success"})
        else:
            return jsonify({"status":"error_username_exists"})
    else:
        print("form validation failed")
        
    
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"
        response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"
        response.headers["Access-Control-Allow-Credentials"] = "true"
        return response
    
    return render_template('register.html', form=form)


class InterestForm(FlaskForm):
    interests = StringField('interest', [validators.DataRequired()])
    submit = SubmitField('Register')


# @app.route('/interest', methods=['GET', 'POST'])
# def interest():
#     form = InterestForm()

    if form.validate_on_submit():
        print("form validaton passed")
        interests = form.interests.data

        # store interests
        users = retrieveUsers()
        if 'user_id' in sessions and session['user_id']:
            cur_user_id = session['user_id']
            existing = False
            for user in users: 
                if user[0] == cur_user_id: 
                    existing = True
                    break
            
            if cur_user:
                insertInterests(cur_user_id, interests)
                return jsonify({"status": "success"})
            else:
                return jsonify({"status":"error_invalid_user_id"})
        else:
            return jsonify({"status":"error_no_user"})
    else:
        print("form validation failed")



@app.route('/add_friends', methods=['GET', 'POST'])
def add_friends():


@app.after_request
def add_cors_headers(response):
    origin = request.headers.get("Origin")
    
    response.headers["Access-Control-Allow-Origin"] = origin
    response.headers["Access-Control-Allow-Methods"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    
    return response

if __name__ == '__main__':
    port = 3232
    app.run(port=port, debug=True)
    print(f"Server started at http://localhost:{port}")

