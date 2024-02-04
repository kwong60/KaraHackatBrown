import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.css";
import title from "./images/title.png";
import {Link} from "react-router-dom"

export function Register() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = async () => {
    console.log("New Username:", newUsername);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    try {
      const response = await axios.post(
        "http://localhost:3232/register",
        {
          username: newUsername,
          password: newPassword,
          confirm_password: confirmPassword,
        },
        {
          withCredentials: true, // Include this line
        }
      );

      // Assuming your Flask server responds with a success message
      if (response.data.status == "success") {
        document.getElementById("message_to_user").innerHTML =
          "Registration successful! Please log in.";
        document.getElementById("message_to_user").style.display = "block"
        // Redirect or perform other actions upon successful registration
        document.getElementById("things_to_hide").style.display= "none"
        document.getElementById("login_button").style.display="block"
      } else {
        document.getElementById("message_to_user").innerHTML =
          "That username is already taken! Try again!";
        document.getElementById("message_to_user").style.display = "block";
  
      }
    } catch (error) {
      document.getElementById("message_to_user").innerHTML =
        "Unexpected error, try another username!";
      document.getElementById("message_to_user").style.display = "block";

    }


  };

  return (
    <div className="App">
      <h1>
        <img src={title} alt="Title" />
      </h1>
      <h2>New User Registration</h2>
      <div id="things_to_hide">
        <div className="username">
          <p style={{ color: "white" }}>
            New Username:{" "}
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </p>
        </div>
        <div className="password">
          <p style={{ color: "white" }}>
            New Password:{" "}
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </p>
        </div>
        <div className="password_con">
          <p style={{ color: "white" }}>
            Confirm Password:{" "}
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </p>
        </div>
        <div className="submit_reg">
          <button type="button" onClick={handleRegistration}>
            Submit
          </button>
        </div>
      </div>
      <div>
        <p
          className="user_message"
          id="message_to_user"
          style={{ display: "none" }}
        ></p>
      </div>
      <div>
        <Link to="/login">
          <button
            type="button"
            id="login_button"
            style={{ display: "none" }}
          >
            Login
          </button>
        </Link>{" "}
      </div>
    </div>
  );
}
