DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username Text KEY,
    pwd Text NOT NULL,
    interests TEXT
);