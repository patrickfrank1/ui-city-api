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
    this.props.handleMessage("UserConsole not implemented yet.", "success");
    this.setState({username: '', password: ''});
  }

  handleLogin = () => {
    this.props.handleMessage("UserConsole not implemented yet.", "warn");
    this.setState({username: '', password: ''});
  }

  handleDelete = () => {
    this.props.handleMessage("UserConsole not implemented yet.");
    this.setState({username: '', password: ''});
  }

  render = () => {
    return (
      <div>
        <button onClick={this.handleSignup}>Sign Up</button>
        <button onClick={this.handleLogin}>Login</button>
        <input type='text' value={this.state.username} placeholder='username' onChange={this.handleUserChange}/>
        <input type='password' value={this.state.password} placeholder='password' onChange={this.handlePasswordChange}/>
        <button onClick={this.handleDelete}>Delete Account</button>
      </div>
    );
  }
}

export default UserConsole;
