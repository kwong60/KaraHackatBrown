from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) for all routes

# Initialize static variables
parsed_loaded_csv = []
parsed_loaded_json = {}
state_code = {}

@app.route('/checkweather', methods=['GET'])
def check_weather():
    # Implement the logic for loading the CSV file
    # You can use request.args to get query parameters if needed
    api_key=f"53b068ebdeed4756a3c64249240302" # do we want future predictions/what parameters should user be able to enter
    request_url = f"http://api.weatherapi.com/v1/current.json?key=53b068ebdeed4756a3c64249240302&q=Providence&aqi=no"
    response = connect(request_url)
    body = response.json()
    current = body["current"]
    return str(current["is_day"])    
    # return jsonify({"message": "CSV loaded successfully"})
    

@staticmethod
def connect(request_url):
    url_connection = requests.get(request_url)
    return url_connection

@app.route('/viewcsv', methods=['GET'])
def view_csv():
    # Implement the logic for viewing the entire CSV file's contents as a JSON 2-dimensional array
    return jsonify(parsed_loaded_json)

@app.route('/searchcsv', methods=['GET'])
def search_csv():
    # Implement the logic for searching rows matching the given search criteria
    # You can use request.args to get query parameters
    return jsonify({"message": "Search results"})

@app.route('/broadband', methods=['GET'])
def broadband():
    # Implement the logic for sending back broadband data from the ACS API
    return jsonify({"message": "Broadband data"})

# Additional endpoints can be added as needed

if __name__ == '__main__':
    port = 3232
    app.run(port=port, debug=True)
    print(f"Server started at http://localhost:{port}")
