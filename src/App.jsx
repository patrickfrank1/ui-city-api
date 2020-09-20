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
