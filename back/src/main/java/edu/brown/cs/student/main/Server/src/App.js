import React from "react";

import { AddFriends } from "./AddFriends";
import { Register } from "./Register";
import { Home } from "./Home";
import { Login } from "./Login";
import { Interests } from "./Interests";
import { Recommendations } from "./Recommendations";
import { PlanMade } from "./PlanMade";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD

import styles from './styles.css'
=======
import styles from "./styles.css";


>>>>>>> 617d3be4e2c372f6e204c29727c1130ac4de8b59

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
        <Route path="/planmade" element={<PlanMade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
