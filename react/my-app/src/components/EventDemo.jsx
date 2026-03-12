import React, { useState } from "react";

function EventDemo() {
  const [admin, setAdmin] = useState("");
  const [pass, setPass] = useState("");

  const inputAdmin = (e) => {
    setAdmin(e.target.value);
  };

  const inputPassword = (e) => {
    setPass(e.target.value);
  };

  const validate = () => {
    if (admin === "Admin" && pass === "admin@123") {
      console.log("Login Successful");
      alert("Login Successful");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login: {admin}</h2>
      <input onChange={inputAdmin} type="text" placeholder="username" />

      <h2>Password: {pass}</h2>
      <input type="password" placeholder="password" onChange={inputPassword} />

      <button onClick={validate}>Validate</button>
    </div>
  );
}

export default EventDemo;
