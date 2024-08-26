import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    // Simulate API call
    console.log("User Registered:", { username, email, password });
  };

  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsename(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit"></button>
    </form>
  );
};

export default RegistrationForm;
