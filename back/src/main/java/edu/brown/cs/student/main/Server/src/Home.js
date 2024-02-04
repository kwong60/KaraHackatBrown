import React, { useState } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import earth from "./images/earth.png";
import axios from "axios";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="App">
      <div className="body">
        <h1>
          <img src={title} alt="Title" />
        </h1>
        <div>
          <Link to="/login">
            <button type="button">Log In!</button>
          </Link>{" "}
        </div>
        <div>
          <Link to="/register">
            <button type="button">Register!</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
