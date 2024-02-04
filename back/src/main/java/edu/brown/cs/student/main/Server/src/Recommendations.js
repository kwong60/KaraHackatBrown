import React, { useState, useEffect } from "react";
import title from "./images/title.png";
import axios from "axios"
import yes from "./images/yes.png";
import no from "./images/no.png";
import logo from "./images/logo.png";
import activities_dict from "./activities_dict.json"

// ... (your other imports)

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
    <div className="App">
      <div class="fixed_element">
        <img src={logo} />
      </div>
      <h1>
        <img src={title} />
      </h1>
      <h2>
        Based on both today's <b>SUNNY</b> weather and you and your friends'
        interests,
        <br></br>Here are your suggestions!
      </h2>

      <div className="recommendation">
        <p>
          <b>Name:</b> Plant City
        </p>
        <p>
          <b>Category:</b> Food
        </p>
        <p>
          <b>Location:</b> 334 South Water Street
        </p>
        <p>
          <b>DEI:</b> "Plant-based", "Women-owned"
        </p>
        <p>
          <b>Description:</b>
          "Award-winning, chef-driven cuisine at the world’s very first
          plant-based food hall."
        </p>
      </div>
      <div></div>
      {/*suggestion 1*/}
      {/* <div class="vote_button1">
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
      </div> */}
      <div className="recommendation">
        <p>
          <b>Name:</b> Angelo's Civita Farnese
        </p>
        <p>
          <b>Category:</b> Food
        </p>
        <p>
          <b>Location:</b> 141 Atwells Ave
        </p>
        <p>
          <b>DEI:</b> "Women-owned", "Small Business"
        </p>
        <p>
          <b>Description:</b>
          "Serving Italian comfort food since 1924. Awarded Best Locally Owned
          Family Friendly Restaurant in 2019."
        </p>
      </div>
      {/*sugestion 2*/}
      {/* <div class="vote_button2">
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
      </div> */}
      {/*suggestion 3 */}
      {/* <div class="vote_button3">
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
      </div> */}
    </div>
  );
}
}