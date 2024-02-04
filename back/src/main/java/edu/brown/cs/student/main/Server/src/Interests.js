import React, { useState } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import {useNavigate} from "react-router-dom"

export function Interests() {
    <link rel="stylesheet" href="mystyle.css"></link>;

  const [interestList, setInterestList] = useState("");
  const navigate = useNavigate();

const handleButtonClick = (interest) => {
    if (!interestList.includes(interest)) {
        setInterestList((prevList) => [...prevList, interest]);
    }
    else {
        setInterestList((prevList) => prevList.filter((item) => item !== interest));
    }
    
}

const handleSubmit = () => {
   // Now you can use the interestList for further processing or redirection
   console.log("Selected Interests:", interestList);
   // ... other logic or redirection
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
    </div>
  );
}

// export default App;
