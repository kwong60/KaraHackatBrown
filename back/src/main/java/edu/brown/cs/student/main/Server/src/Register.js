import React, { useState } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import earth from "./images/earth.png";

export function Register() {


return(
<div className="App">
  <h1>
    <img src={title} />
  </h1>
  <h2>New User Registration</h2>
  <div class="username">
    <p style={{ color: "white" }}>
      {" "}
      New Username: <input type="text" />
    </p>
  </div>
  <div class="password">
    <p style={{ color: "white" }}>
      New Password: <input type="text" />
    </p>
  </div>
  <div class="password_con">
    <p style={{ color: "white" }}>
      Confirm Password: <input type="text" />
    </p>
  </div>
  <div class="submit_reg">
    <button type="submit">Submit</button>
  </div>
</div>)};
