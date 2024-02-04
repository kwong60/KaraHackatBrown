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
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3232/login", {
        username: username,
        password: password,
      });

      // Assuming your Flask server responds with a success message
      if (response.data.status == "success") {
        console.log("Login successful");
        navigate("/interests");

        // Redirect or perform other actions upon successful login
      } else {
        document.getElementById("message_to_user").style.display = "block";
        document.getElementById("message_to_user").innerHTML =
          "Your username or password was incorrect. Please try again!";
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const onRegister = () => {
    navigate("/register");
  }

  return (
    <div className="App">
      <div className="body">
        <h1>
          <img src={title} alt="Title" />
        </h1>
        <h2>Please log in.</h2>
        <div className="username">
          <p style={{ color: "white" }}>
            Username:{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
        </div>
        <div className="password">
          <p style={{ color: "white" }}>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
        </div>
        <div className="submit_login">
          <button type="button" onClick={handleLogin}>
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
        <div>
          <button type="button" onClick={onRegister}>
            Don't have an account yet? Sign up here!
          </button>
        </div>
      </div>
    </div>
  );
}
