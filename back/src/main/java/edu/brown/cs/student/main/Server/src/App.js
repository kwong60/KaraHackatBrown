import React, { useState , useRef } from "react";
import styles from "./styles.css";
import title from "./images/title.png";
import active from "./images/active.png";
import enter from "./images/entertainment.png";
import food from "./images/food.png";
import shopping from "./images/shopping.png";
import wild from "./images/wildcard.png";
import earth from "./images/earth.png";
import FriendList from "./FriendList";
import yes from "./images/yes.png";
import no from "./images/no.png";
import logo from "./images/logo.png";

function App() {

  // Add Friends
  const [friends, setFriends] = useState([]);
  const friendNameRef = useRef();

  <link rel="stylesheet" href="styles.css"></link>

  function handleAddFriend(e){
    const name = friendNameRef.current.value
    if (name === '') return
    setFriends(prevFriends => {
      return [...prevFriends, { name }]
    })
    friendNameRef.current.value = null
  }

  return (


    // Plan Made
    // <div className="App">
    //   <div class="fixed_element"><img src={logo} /></div>
    //     <h1><img src={title} /></h1>
    //     <h2>Sounds like a plan! Today you'll be at...</h2>
    //     {/* location */}
    //     <h2>See you constel-later :)</h2>
    //   </div>


    // Recommendations
    // <div className="App">
    //   <div class="fixed_element"><img src={logo} /></div>

    //   <h1><img src={title} /></h1>
    //   <h2>Here are your suggestions!</h2>
    //     {/*suggestion 1*/}
    //     <div class="vote_button1">
    //     <div class="sug1yes">
    //     <button>
    //          <img src={yes} />
    //         </button>{" "}
    //     </div>
    //     <div class="sug1no">
    //         <button>
    //           <img src={no} />
    //         </button>{" "}
    //       </div>
    //       </div>
    //     {/*sugestion 2*/}
    //     <div class="vote_button2">
    //     <div class="sug2yes">
    //     <button>
    //          <img src={yes} />
    //         </button>{" "}
    //     </div>
    //     <div class="sug2no">
    //         <button>
    //           <img src={no} />
    //         </button>{" "}
    //       </div>
    //       </div>
    //     {/*suggestion 3 */}
    //     <div class="vote_button3">
    //     <div class="sug3yes">
    //     <button>
    //          <img src={yes} />
    //         </button>{" "}
    //     </div>
    //     <div class="sug3no">
    //         <button>
    //           <img src={no} />
    //         </button>{" "}
    //       </div>
    //     </div>

    // </div>

    <div className="App">
       <div class="fixed_element"><img src={logo} /></div>
       <h1><img src={title} /></h1>
        <h2>Add Friends!</h2>
        <div class="username">
          <p style={{ color: 'white' }}> Username: <input ref={friendNameRef} type="text"/></p>
        </div>
        <div class="submit_friends">
           <button onClick={handleAddFriend}>Submit</button>
        </div>
      <FriendList friends={friends}/>
    </div>

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
    // <div className="App">
    //   <h1>
    //     <img src={title} />
    //   </h1>
    //   <h2>What are you interested in today?</h2>
    //   <div class="button">
    //     <div class="active">
    //       <button>
    //         <img src={active} />
    //       </button>{" "}
    //       <span></span>
    //     </div>
    //     <div class="entertain">
    //       <button>
    //         <img src={enter} />
    //       </button>{" "}
    //       <span></span>
    //     </div>
    //     <div class="food">
    //       <button>
    //         <img src={food} />
    //       </button>{" "}
    //       <span></span>
    //     </div>
    //     <div class="shop">
    //       <button>
    //         <img src={shopping} />
    //       </button>{" "}
    //       <span></span>
    //     </div>
    //     <div class="wildcard">
    //       <button>
    //         <img src={wild} />
    //       </button>{" "}
    //       <span></span>
    //     </div>
    //   </div>
    //   <div class="submit_int">
    //     <button type="submit">Submit</button>
    //   </div>{" "}
    // </div>
  );
}

export default App;
