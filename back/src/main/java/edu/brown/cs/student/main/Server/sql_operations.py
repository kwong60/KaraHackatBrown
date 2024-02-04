import sqlite3
from enum import Enum

class Activities(Enum):
    Active = 1
    Entertain = 2
    Food = 3
    Shop = 4
    Wildcard = 5


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
    cur.execute("UPDATE users SET interests=? WHERE user_id=?", (interests, user_id))
    con.commit()
    con.close()

def retrieveGroupId(username):
    con = sqlite3.connect("database_group.db")
    cur = con.cursor()
    cur.execute("SELECT group_id FROM group_members WHERE username=?", username)
    ids = cur.fetchall()
    con.close()
    return ids

def getUserByUsername(username):
    con = sqlite3.connect("database.db")
    cur = con.cursor()
    cur.execute("SELECT user_id, pwd FROM users WHERE username=?", (username,))
    users = cur.fetchall()
    con.close()
    return users


def getUsernameById(id):
    con = sqlite3.connect("database.db")
    cur = con.cursor()
    cur.execute("SELECT username FROM users WHERE user_id=?", (id,))
    usernames = cur.fetchall()
    con.close()
    return usernames

## 
## friends: a list of friend usernames
##
def addFriends(group_id, friends):
    con = sqlite3.connect("database_group.db")
    cur = con.cursor()
    for friend in friends:
        cur.execute("INSERT INTO group_members (group_id,username) VALUES (?,?)", (group_id, friend))
    con.commit()
    con.close()

def createNewGroup():
    con = sqlite3.connect("database_group.db")
    cur = con.cursor()
    cur.execute("INSERT INTO groups DEFAULT VALUES")
    con.commit()
    con.close()
    return cur.lastrowid # returns the newly-created group id

def get_group_members(id):
    con = sqlite3.connect("database_group.db")
    cur = con.cursor()
    cur.execute("SELECT username FROM group_members WHERE group_id=?", (id,))
    usernames = cur.fetchall()
    con.close()
    return usernames

def get_all_interests(members):
    con = sqlite3.connect("database.db")
    cur = con.cursor()
    interests_lists = []
    for member in members:
        cur.execute("SELECT interests FROM users WHERE username=?", (member,))
        interests_lists.append(cur.fetchall().split(','))
    print(interests)
    common_interests = [True, True, True, True, True]
    for interests_list in interests_lists:
        for activity in Activities:
            if activity not in interests_list:
                common_interests[activity] = False

    group_interests = []
    for i in range(5):
        if common_interests[i]:
            group_interests.append(Activities(i).name)
    con.close()
    print(group_interests)
    return group_interests