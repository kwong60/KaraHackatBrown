import React, { useState } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import earth from "./images/earth.png";
import axios from "axios"


export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3232/login", {
        username: username,
        password: password,
      });

      // Assuming your Flask server responds with a success message
      if (response.data.success) {
        console.log("Login successful");
        // Redirect or perform other actions upon successful login
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

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
      </div>
    </div>
  );
}


// export function Login() {
//     <link rel="stylesheet" href="mystyle.css"></link>;


// return (

// <div className="App">
//   <div className="body">
//     <h1>
//       <img src={title} />
//     </h1>
//     <h2>Please log in.</h2>
//     <div class="username">
//       <p style={{ color: "white" }}>
//         Username: <input type="text" />
//       </p>
//     </div>
//     <div class="password">
//       <p style={{ color: "white" }}>
//         Password: <input type="text" />
//       </p>
//     </div>
//     <div class="submit_login">
//       <button type="submit">Submit</button>
//     </div>
//   </div>
// </div>)
// };
