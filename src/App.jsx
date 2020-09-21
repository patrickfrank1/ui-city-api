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
      results: null
    };
  }
  handleMessage = (txt, type = 'error') => {
    this.setState({message: txt, msgType: type});
    setTimeout(()=>{this.setState({message:'', msgType:''})},3000)
  }
  
  setParentState = (prop, token) => {
    return (token) => this.setState({[prop]: token});
  }

  render() {
    return (
      <div>
        <div className="loginMenu">
          <div className='userConsole'>
            <UserConsole handleMessage={this.handleMessage} setCookie={this.setParentState('cookie')} />
          </div>
          <span className="title">Search for a city in North America</span>
          <span className="disclaimer">This small SPA consumes the REST API at <a href="https://github.com/patrickfrank1/coding-challenge-backend-c">https://github.com/patrickfrank1/coding-challenge-backend-c</a></span>
        </div>
        <div className="searchMenu">
          <SearchBar handleMessage={this.handleMessage} accessToken={this.state.cookie} setData={this.setParentState('results')}/>
        </div>
        <div className={this.state.msgType + " infobox"}>
          {this.state.message === null ? '' : this.state.message}
        </div>
        <SearchResults results={this.state.results} />
        <div className="footer">
          <span>&copy; 2020, Patrick Frank</span>
          <span>Github: <a href="https://github.com/patrickfrank1/ui-city-api">https://github.com/patrickfrank1/ui-city-api</a></span>
          <span>License: MIT</span>
        </div>
      </div>
    );
  }
}

export default App;
