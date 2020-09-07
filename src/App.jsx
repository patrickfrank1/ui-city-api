/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failureMessage: ''
    };
  }
  handleFailure = (txt) => {
    this.setState({failureMessage: txt});
    setTimeout(()=>{this.setState({failureMessage:''})},3000)
  }

  render() {
    return (
      <div>
        <div className="menu">
          <SearchBar handleFailure={this.handleFailure} />
        </div>
        <div className="infobar">
          {this.state.failureMessage === null ? '' : this.state.failureMessage}
        </div>
      </div>
    );
  }
}

export default App;
