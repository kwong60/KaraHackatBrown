import React, { useState, useRef } from 'react';
import './mystyle.css';
import title from './images/title.png'

function App() {
  <link rel="stylesheet" href="mystyle.css"></link>
  const [Interest, setInterest]=useState("")

  function handleInterests(e) {
    e.preventDefault()
    console.warn("Interests", Interest)
  } 

  return (
      <div className="App">
        <h1><img src={title} /></h1>
          <h2>What are your interests?</h2>
            <form onSubmit={handleInterests}>
            <input type="checkbox" onChange={(e)=>setInterest(e.target.value)}/><span>Food</span> <br /> <br />
            <input type="checkbox" onChange={(e)=>setInterest(e.target.value)}/><span>Active</span> <br /> <br />
            <input type="checkbox" onChange={(e)=>setInterest(e.target.value)}/><span>Shopping</span> <br /> <br />
            <input type="checkbox" onChange={(e)=>setInterest(e.target.value)}/><span>Entertainment</span> <br /> <br />
            <input type="checkbox" onChange={(e)=>setInterest(e.target.value)}/><span>Community Service</span> <br /> <br />
            <button type="submit">Submit</button>
            </form>
      </div>
  );
}

export default App;
