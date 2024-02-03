import sqlite3

connection = sqlite3.connect('database.db')

with open('schema.sql', 'r') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO users (user, pwd) VALUES (?, ?)",
            ("user1", 'Password')
            )

connection.commit()
connection.close()