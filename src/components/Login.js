import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // simple login condition (you can add real auth later)
    if (username.trim() !== "") {
      alert(`Welcome, ${username}! Redirecting to Dashboard...`);
      navigate("/dashboard"); // redirect after login
    } else {
      alert("Please enter your username!");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", margin: "5px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
