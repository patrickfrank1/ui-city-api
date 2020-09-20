/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import UserConsole from './UserConsole';
import SearchResults from './SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      msgType: '',
      cookie: '',
      results: [1,2,3,4,5]
    };
  }
  handleMessage = (txt, type = 'error') => {
    this.setState({message: txt, msgType: type});
    setTimeout(()=>{this.setState({message:''})},3000)
  }
  
  setParentState = (prop, token) => {
    return (token) => this.setState({[prop]: token});
  }

  render() {
    return (
      <div>
        <div className="menu">
          <SearchBar handleMessage={this.handleMessage} accessToken={this.state.cookie} setData={this.setParentState('results')}/>
          <UserConsole handleMessage={this.handleMessage} setCookie={this.setParentState('cookie')} />
        </div>
        <div className={this.state.msgType}>
          {this.state.message === null ? '' : this.state.message}
        </div>
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default App;
