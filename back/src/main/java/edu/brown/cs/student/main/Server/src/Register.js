import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.css";
import title from "./images/title.png";

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
      if (response.data.success) {
        console.log("Registration successful");
        // Redirect or perform other actions upon successful registration
      } else {
        console.log(response.data)
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="App">
      <h1>
        <img src={title} alt="Title" />
      </h1>
      <h2>New User Registration</h2>
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
  );
}
