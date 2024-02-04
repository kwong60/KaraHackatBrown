import React, { useState } from "react";

import { AddFriends } from "./AddFriends";
import { Register } from "./Register";
import { Home } from "./Home";
import { Login } from "./Login";
import { Interests } from "./Interests";
import { Recommendations } from "./Recommendations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./styles.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addfriends" element={<AddFriends />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
