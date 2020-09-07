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
      msgType: ''
    };
  }
  handleMessage = (txt, type = 'error') => {
    this.setState({message: txt, msgType: type});
    setTimeout(()=>{this.setState({message:''})},3000)
  }

  render() {
    return (
      <div>
        <div className="menu">
          <SearchBar handleMessage={this.handleMessage} />
          <UserConsole handleMessage={this.handleMessage} />
        </div>
        <div className={this.state.msgType}>
          {this.state.message === null ? '' : this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
