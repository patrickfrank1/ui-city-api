import React from 'react';
import axios from 'axios';


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
    if (this.state.username === '') {
      this.props.handleMessage("Please specify a username.", "error");
      
    }
    if (this.state.password === '') {
      this.props.handleMessage("Please specify a password.", "error");
    }
    const payload = {
      'username': this.state.username,
      'password': this.state.password
    };
    fetch('https://city-search-node-api.herokuapp.com/register',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(res => {
      if (res.status >= '400') {
        res.text().then(resText => {
          this.props.handleMessage(resText, "error");
        })
      } else {
        res.text().then(resText => {
          this.props.handleMessage(resText, "success");
        })
      }
    }).catch(err => {
      this.props.handleMessage("Internal server error.", "error");
      console.log(err);
    });

    this.setState({username: '', password: ''});
  }

  handleLogin = () => {
    if (this.state.username === '') {
      this.props.handleMessage("Please specify a username.", "error");
    }
    if (this.state.password === '') {
      this.props.handleMessage("Please specify a password.", "error");
    }
    const payload = {
      'username': this.state.username,
      'password': this.state.password
    };
    axios.post('https://city-search-node-api.herokuapp.com/login',payload)
    .then(res => {
      console.log(res);
    });
    // fetch('https://city-search-node-api.herokuapp.com/login',{
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // }).then(res => {
    //   if (res.status >= '400') {
    //     res.text().then(resText => {
    //       this.props.handleMessage(resText, "error");
    //     })
    //   } else {
    //     res.text().then(resText => {
    //       this.props.handleMessage("You are logged in.", "success");
    //     })
    //   }
    // }).catch(err => {
    //   this.props.handleMessage("Internal server error.", "error");
    //   console.log(err);
    // });

    this.setState({username: '', password: ''});
  }

  handleDelete = () => {
    axios.delete('https://city-search-node-api.herokuapp.com/deregister',{
      withCredentials: true,
      crossDomain: true
    }).then(res =>{
      if(res.status === '200') {
        res.text().then(resText => {
          this.props.handleMessage(resText, "success");
        });
      } else {
        res.text().then(resText => {
          this.props.handleMessage(resText, "error");
        });
      }
    });
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
