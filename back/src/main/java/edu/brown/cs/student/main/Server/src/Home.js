import React from "react";
import title from "./images/title.png";
import login from "./images/login.png";
import register from "./images/register.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="App">
      <div className="body">
        <h1>
          <img src={title} alt="Title" />
        </h1>
        <div class="login_button">
        <div class="login">
          <div>
            <Link to="/login">
              <button type="button"><img src={login} /></button>
            </Link>{" "}
          </div>
        </div>
        <div class="register">
          <div>
            <Link to="/register">
              <button type="button"><img src={register} /></button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
