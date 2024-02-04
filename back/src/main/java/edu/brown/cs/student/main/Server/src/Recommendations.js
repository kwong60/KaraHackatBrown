import React, { useState, useEffect } from "react";
import title from "./images/title.png";
import axios from "axios"
import yes from "./images/yes.png";
import no from "./images/no.png";
import logo from "./images/logo.png";

export function Recommendations() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  useEffect(() => {
    handleWeatherRequest(); // Call the function when the component mounts
  }, []);

  
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

      if (response.status == "success") {
        
      }

      
      const code = response.code;
      const text = response.text;
      console.log(code)
      console.log(text)

    //   // Assuming your Flask server responds with a success message
    //   if (response.data.status == "success") {
    //     document.getElementById("message_to_user").innerHTML =
    //       "Registration successful! Please log in.";
    //     document.getElementById("message_to_user").style.display = "block"
    //     // Redirect or perform other actions upon successful registration
    //     document.getElementById("things_to_hide").style.display= "none"
    //     document.getElementById("login_button").style.display="block"
    //   } else {
    //     document.getElementById("message_to_user").innerHTML =
    //       "That username is already taken! Try again!";
    //     document.getElementById("message_to_user").style.display = "block";
  
    //   }
    } catch (error) {
      // document.getElementById("message_to_user").innerHTML =
      //   "Unexpected error, try another username!";
      // document.getElementById("message_to_user").style.display = "block";

    }
  }
  


  return (
    // Recommendations
    <div className="App">
      <div class="fixed_element"><img src={logo} /></div>

      <h1><img src={title} /></h1>
      <h2>Here are your suggestions!</h2>
        {/*suggestion 1*/}
        <div class="vote_button1">
        <div class="sug1yes">
        <button>
             <img src={yes} />
            </button>{" "}
        </div>
        <div class="sug1no">
            <button>
              <img src={no} />
            </button>{" "}
          </div>
          </div>
        {/*sugestion 2*/}
        <div class="vote_button2">
        <div class="sug2yes">
        <button>
             <img src={yes} />
            </button>{" "}
        </div>
        <div class="sug2no">
            <button>
              <img src={no} />
            </button>{" "}
          </div>
          </div>
        {/*suggestion 3 */}
        <div class="vote_button3">
        <div class="sug3yes">
        <button>
             <img src={yes} />
            </button>{" "}
        </div>
        <div class="sug3no">
            <button>
              <img src={no} />
            </button>{" "}
          </div>
        </div>
        </div>
  );
}
