import React, { useState } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import earth from "./images/earth.png";

function App() {
  // const [friends, setFriends] = useState([]);
  // const friendNameRef = useRef();

  // <link rel="stylesheet" href="mystyle.css"></link>

  // function handleAddFriend(e){
  //   const name = friendNameRef.current.value
  //   if (name === '') return
  //   setFriends(prevFriends => {
  //     return [...prevFriends, { name }]
  //   })
  //   friendNameRef.current.value = null
  // }

  //
  //

  return (
    // <div className="App">
    //   <h1><img src={title} /></h1>
    //     <h2>Add Friends!</h2>
    //     <div class="username">
    //       <p style={{ color: 'white' }}> Username: <input ref={friendNameRef} type="text"/></p>
    //     </div>
    //     <div class="submit_friends">
    //        <button onClick={handleAddFriend} type="submit">Submit</button>
    //        </div>
    // </div>

    // Registration
    // <div className="App">
    //   <h1><img src={title} /></h1>
    //     <h2>New User Registration</h2>
    //     <div class="username">
    //     <p style={{ color: 'white' }}> New Username: <input type="text"/></p>
    //     </div>
    //     <div class="password">
    //          <p style={{ color: 'white' }}>New Password: <input type="text"/></p>
    //     </div>
    //     <div class="password_con">
    //          <p style={{ color: 'white' }}>Confirm Password: <input type="text"/></p>
    //     </div>
    //     <div class="submit_reg">
    //          <button type="submit">Submit</button>
    //     </div>
    // </div>

    // Log In.
    // <div className="App">
    //     <div className="body">
    //     <h1><img src={title} /></h1>
    //       <h2>Please log in.</h2>
    //         <div class="username">
    //         <p style={{ color: 'white' }}>Username: <input type="text"/></p>
    //         </div>
    //         <div class="password">
    //         <p style={{ color: 'white' }}>Password: <input type="text"/></p>
    //         </div>
    //         <div class="submit_login">
    //         <button type="submit">Submit</button>
    //         </div>
    //       </div>
    //     </div>

    // Interests
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

export default App;
