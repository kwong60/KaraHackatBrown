import React, { useState } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import earth from "./images/earth.png";

export function Login() {
    <link rel="stylesheet" href="mystyle.css"></link>;


return (

<div className="App">
  <div className="body">
    <h1>
      <img src={title} />
    </h1>
    <h2>Please log in.</h2>
    <div class="username">
      <p style={{ color: "white" }}>
        Username: <input type="text" />
      </p>
    </div>
    <div class="password">
      <p style={{ color: "white" }}>
        Password: <input type="text" />
      </p>
    </div>
    <div class="submit_login">
      <button type="submit">Submit</button>
    </div>
  </div>
</div>)
};
