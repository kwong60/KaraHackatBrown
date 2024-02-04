import React, { useState, useRef } from "react";
import title from "./images/title.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function AddFriends() {
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const friendNameRef = useRef();

  function handleAddFriend() {
    const name = friendNameRef.current.value.trim();
    if (name === "") return;

    if (!friends.some((friend) => friend.name === name)) {
      setFriends((prevFriends) => [...prevFriends, { name }]);
      friendNameRef.current.value = "";
    }
  }

  function handleRemoveFriend(index) {
    setFriends((prevFriends) => {
      const updatedFriends = [...prevFriends];
      updatedFriends.splice(index, 1);
      return updatedFriends;
    });
  }

  const handleSubmit = async () => {
    console.log("Friends List:", friends);
    const friendsString = friends.map((friend) => friend.name).join(",");
    console.log(friendsString);
    try {
      const response = await axios.post(
        "http://localhost:3232/add_friends",
        {
          friends: friendsString,
        },
        {
          withCredentials: true, // Include this line
        }
      );

      // Assuming your Flask server responds with a success message
      if (response.data.status == "success") {
        navigate("/recommendations");
      } else {
        document.getElementById("message_to_user").innerHTML =
          "Something went wrong! Try again!";
        document.getElementById("message_to_user").style.display = "block";
      }
    } catch (error) {
      document.getElementById("message_to_user").innerHTML =
        "Unexpected error, try another username!";
      document.getElementById("message_to_user").style.display = "block";
    }

    navigate("/recommendations");
  };

  return (
    <div className="App">
      <h1>
        <img src={title} />
      </h1>
      <h2>Add Friends!</h2>
      <div className="username">
        <p style={{ color: "white" }}>
          {" "}
          Username: <input ref={friendNameRef} type="text" />
        </p>
        <button onClick={handleAddFriend} type="submit">
          Add friend to list
        </button>
      </div>
      <div className="friends-list">
        <h3>Friends List:</h3>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              {friend.name}{" "}
              <button onClick={() => handleRemoveFriend(index)} type="button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="submit">
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
      <div>
        <p
          className="user_message"
          id="message_to_user"
          style={{ display: "none" }}
        ></p>
      </div>
    </div>
  );
}
