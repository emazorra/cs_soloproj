import React, { useState } from "react";
import Profile from "./profile.jsx";
import Box from '@mui/material/Box';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ username });
    console.log({ password });

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        // create new component for correct information
        // serve that info once login is successful
        // render profile component
        const userData = await response.json();
        setUser(userData);
        // console.log("user: ", user);

        // how to pass users information to profile component
        console.log("Login successful");
      } 

    } catch (err) {
      setError("Failed to log in. Please try again later.");
      console.log("Login failed: ", error);
    }
  };

  return (
    <div>
      {!user ? (
        <form onSubmit={handleSubmit}>
          <Box className="login_form">
            <h2>Log In</h2>
            <label htmlFor="user_email">Email: </label>
            <input
              type="email"
              id="user_email"
              name="email"
              placeholder="example@gmail.com"
              onChange={handleUsernameChange}
            />
          </Box>
          <Box className="login_form">
            <label htmlFor="s_password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlePasswordChange}
            />
          </Box>
          <button className="login_btn" type="submit">
            Login
          </button>
        </form>
      ) : (
        <Profile {...user} />
      )}
    </div>
  );
};

export default LoginForm;
