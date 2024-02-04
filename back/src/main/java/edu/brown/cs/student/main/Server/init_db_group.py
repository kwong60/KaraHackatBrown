import sqlite3

connection = sqlite3.connect('database_group.db')

with open('schema_group.sql', 'r') as f:
    connection.executescript(f.read())

connection.commit()
connection.close()