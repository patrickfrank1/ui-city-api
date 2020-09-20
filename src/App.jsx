/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import UserConsole from './UserConsole';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      msgType: '',
      cookie: ''
    };
  }
  handleMessage = (txt, type = 'error') => {
    this.setState({message: txt, msgType: type});
    setTimeout(()=>{this.setState({message:''})},3000)
  }
  
  setCookie = (token) => {
    this.setState({cookie: token});
  }

  render() {
    return (
      <div>
        <div className="menu">
          <SearchBar handleMessage={this.handleMessage} accessToken={this.state.cookie} />
          <UserConsole handleMessage={this.handleMessage} setCookie={this.setCookie} />
        </div>
        <div className={this.state.msgType}>
          {this.state.message === null ? '' : this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
