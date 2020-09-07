import React from 'react';

class UserConsole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleSignup = () => {
    this.props.handleFailure("UserConsole not implemented yet.");
    this.setState({username: '', password: ''});
  }

  handleLogin = () => {
    this.props.handleFailure("UserConsole not implemented yet.");
    this.setState({username: '', password: ''});
  }

  render = () => {
    return (
      <div>
        <label>
          <button onClick={this.handleSignup}>Sign Up</button>
          <button onClick={this.handleLogin}>Login</button>
        </label>
        <input type='text' value={this.state.username} placeholder='username' onChange={this.handleUserChange}/>
        <input type='password' value={this.state.password} placeholder='password' onChange={this.handlePasswordChange}/>
      </div>
    );
  }
}

export default UserConsole;
