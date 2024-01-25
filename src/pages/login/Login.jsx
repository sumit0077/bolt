// Login.jsx
import DiamondIcon from '@mui/icons-material/Diamond';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Simulate authentication (replace with your actual authentication logic)
    if (credentials.username === "bolt" && credentials.password === "password") {
      console.log("Login successful!", credentials);
      navigate("/dashboard");
    } else {
      console.log("Login failed. Please check your credentials.");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <DiamondIcon className='icon'/>
      <h2 className="login-title">
      
      </h2>
      <form>
        <label className="login-label">
          Username
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            className="login-input"
          />
        </label>
        <br />
        <label className="login-label">
          Password
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            className="login-input"
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} className="login-button">
          Login
          
        </button>
      </form>
    </div>
  );
};

export default Login;
