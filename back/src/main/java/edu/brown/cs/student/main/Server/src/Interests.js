import React, { useState } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";

export function Interests() {
  <link rel="stylesheet" href="mystyle.css"></link>;

//   const [interest, setInterest] = useState("");
//   const history = useHistory();

//   const handleSubmit = () => {
//     history.push('/recommendations?interests=${interest}')
//   }

  
  



  return (
    <div className="App">
      <h1>
        <img src={title} />
      </h1>
      <h2>What are you interested in today?</h2>
      <div class="button">
        <div class="active">
          <button>
            <img src={active} />
          </button>{" "}
          <span></span>
        </div>
        <div class="entertain">
          <button>
            <img src={enter} />
          </button>{" "}
          <span></span>
        </div>
        <div class="food">
          <button>
            <img src={food} />
          </button>{" "}
          <span></span>
        </div>
        <div class="shop">
          <button>
            <img src={shopping} />
          </button>{" "}
          <span></span>
        </div>
        <div class="wildcard">
          <button>
            <img src={wild} />
          </button>{" "}
          <span></span>
        </div>
      </div>
      <div class="submit_int">
        <button type="submit">Submit</button>
      </div>{" "}
    </div>
  );
}

// export default App;
