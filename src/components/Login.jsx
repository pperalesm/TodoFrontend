import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Alert, Button, Form } from "react-bootstrap";

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
      <h1>LOGIN PAGE</h1>
      {loginFailed && (
        <Alert
          variant="warning"
          dismissible
          onClose={() => setLoginFailed(false)}
        >
          <Alert.Heading>Ooops!</Alert.Heading>
          Wrong credentials, please try again...
        </Alert>
      )}
      <Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            placeholder="pepito"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            placeholder="secetito"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button onClick={handleLoginClick}>Login</Button>
      </Form>
    </div>
  );
}

export default Login;
