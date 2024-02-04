import React, { useState } from "react";
import title from "./images/title.png";
import axios from 'axios';
// import activities_dict from "../activities_dict"

export function Recommendations() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const handleWeatherRequest = async () => {
    console.log("New Username:", newUsername);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
    try {
      const response = await axios.post(
        "http://localhost:3232/checkweather",
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
    </div>
  );
}
}