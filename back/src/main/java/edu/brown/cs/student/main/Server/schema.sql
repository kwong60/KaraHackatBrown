DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username Text NOT NULL,
    pwd Text NOT NULL,
    interest_active Integer CHECK (interest_active IN (0, 1)),
    interest_entertain Integer CHECK (interest_entertain IN (0, 1)),
    interest_food Integer CHECK (interest_food IN (0, 1)),
    interest_shop Integer CHECK (interest_shop IN (0, 1)),
    interest_wildcard Integer CHECK (interest_wildcard IN (0, 1))
);