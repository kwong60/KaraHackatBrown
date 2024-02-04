import React from "react";
import title from "./images/title.png";
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
