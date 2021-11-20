import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = (e) => {
    if (username === "pperalesm" && password === "pperalesm") {
      navigate("/");
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <div className="Login">
      {loginFailed && <div>Login Failed!</div>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Login;
