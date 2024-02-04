DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username Text NOT NULL,
    pwd Text NOT NULL,
    interests Text
);