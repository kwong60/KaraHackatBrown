// Plan Made

import React, { useState, useEffect } from "react";
import title from "./images/title.png";
import axios from "axios"
import logo from "./images/logo.png"

export function PlanMade() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

return (
<div className="App">
<div class="fixed_element"><img src={logo} /></div>
    <h1><img src={title} /></h1>
    <h2>Sounds like a plan! Today you'll be at...</h2>
    {/* location */}
    <h2>See you constel-later :)</h2>
</div>
)};
