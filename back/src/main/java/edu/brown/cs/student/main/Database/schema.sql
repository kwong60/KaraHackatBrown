DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_name Text KEY AUTOINCREMENT,
    pwd Text NOT NULL,
    interests TEXT
);