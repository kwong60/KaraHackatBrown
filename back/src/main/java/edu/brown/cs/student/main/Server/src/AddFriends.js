import React, { useState, useRef } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import earth from "./images/earth.png";

export function AddFriends() {
  const [friends, setFriends] = useState([]);
  const friendNameRef = useRef();

  <link rel="stylesheet" href="mystyle.css"></link>;

  function handleAddFriend(e) {
    const name = friendNameRef.current.value;
    if (name === "") return;
    setFriends((prevFriends) => {
      return [...prevFriends, { name }];
    });
    friendNameRef.current.value = null;
  }

  return (
    <div className="App">
      <h1>
        <img src={title} />
      </h1>
      <h2>Add Friends!</h2>
      <div class="username">
        <p style={{ color: "white" }}>
          {" "}
          Username: <input ref={friendNameRef} type="text" />
        </p>
      </div>
      <div class="submit_friends">
        <button onClick={handleAddFriend} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
