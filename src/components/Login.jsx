import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginFailed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  render() {
    return (
      <div className="Login">
        {this.state.loginFailed && <div>Login Failed!</div>}
        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleLoginClick(event) {
    if (this.state.username === "pperalesm" && this.state.password === "pperalesm") {
      //this.props.push("/");
    } else {
      this.setState({loginFailed: true});
    }
  }
}

export default Login;