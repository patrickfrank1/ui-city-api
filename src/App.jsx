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
      results: [{"name":"Springfield, FL, US","latitude":"30.15326","longitude":"-85.61132","score":1},{"name":"Springfield, IL, US","latitude":"39.80172","longitude":"-89.64371","score":1},{"name":"Springfield, MO, US","latitude":"37.21533","longitude":"-93.29824","score":1},{"name":"Springfield, OH, US","latitude":"39.92423","longitude":"-83.80882","score":1},{"name":"Springfield, PA, US","latitude":"39.93067","longitude":"-75.32019","score":1},{"name":"Springfield, TN, US","latitude":"36.50921","longitude":"-86.885","score":1}]
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
