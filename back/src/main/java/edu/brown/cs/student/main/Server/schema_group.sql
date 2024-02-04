DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS group_members;

CREATE TABLE groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE group_members (
    group_id INTEGER NOT NULL,
    username TEXT NOT NULL,
    FOREIGN KEY (group_id) REFERENCES groups(id)
);
