import React, { useState } from "react";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Interests() {
  <link rel="stylesheet" href="mystyle.css"></link>;

  const [interestList, setInterestList] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (interest) => {
    if (!interestList.includes(interest)) {
      setInterestList((prevList) => [...prevList, interest]);
    } else {
      setInterestList((prevList) =>
        prevList.filter((item) => item !== interest)
      );
    }
  };

  const handleSubmit = async () => {
    // Now you can use the interestList for further processing or redirection
    console.log(interestList)
    const interestsString = interestList.join(",");
    console.log(interestsString)
    try {
      const response = await axios.post(
        "http://localhost:3232/interests",
        {
          interests: interestsString,
        },
        {
          withCredentials: true, // Include this line
        }
      );

      // Assuming your Flask server responds with a success message
      if (response.data.status == "success") {
        navigate("/addfriends");
      } else {
        document.getElementById("message_to_user").innerHTML =
          "Something went wrong! Try again!";
        document.getElementById("message_to_user").style.display = "block";
      }
    } catch (error) {
      document.getElementById("message_to_user").innerHTML =
        "Unexpected error, try another username!";
      document.getElementById("message_to_user").style.display = "block";
    }

    navigate("/addfriends");
  };

  return (
    <div className="App">
      <h1>
        <img src={title} />
      </h1>
      <h2>What are you interested in today?</h2>
      <div class="button">
        <div class="active">
          <button onClick={() => handleButtonClick("active")}>
            <img src={active} />
          </button>{" "}
          <span></span>
        </div>
        <div class="entertain">
          <button onClick={() => handleButtonClick("entertain")}>
            <img src={enter} />
          </button>{" "}
          <span></span>
        </div>
        <div class="food">
          <button onClick={() => handleButtonClick("food")}>
            <img src={food} />
          </button>{" "}
          <span></span>
        </div>
        <div class="shop">
          <button onClick={() => handleButtonClick("shop")}>
            <img src={shopping} />
          </button>{" "}
          <span></span>
        </div>
        <div class="wildcard">
          <button onClick={() => handleButtonClick("wildcard")}>
            <img src={wild} />
          </button>{" "}
          <span></span>
        </div>
      </div>
      <div class="submit_int">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>{" "}
      <div>
        <p
          className="user_message"
          id="message_to_user"
          style={{ display: "none" }}
        ></p>
      </div>
    </div>
  );
}

// export default App;
