import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }

  handleSubmit = () => {
    if (this.state.input === '') {
      this.props.handleMessage("Please search for something, anything.", "error");
    }
    fetch('https://city-search-node-api.herokuapp.com/suggestions?q='+this.state.input,{
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accessToken': cookie
      }
    }).then(res => {
      if (parseInt(res.status) >= 400) {
        res.text().then(resText => {
          console.log(resText, "error");
        });
      } else {
        res.json().then(data => {
            console.log(data);
        });
      }
    }).catch(err => {
      console.log("Internal server error.", "error");
      console.log(err);
    });


    this.props.handleMessage("Search not implemented yet.", "error");
    this.setState({input: ''});
  }

  render = () => {
    return (
      <div>
        <button onClick={this.handleSubmit}>&#128270;</button> {/*🔎*/}
        <input type='text' value={this.state.input} placeholder='search query' onChange={this.handleChange}/>
      </div>
      
    );
  }
}

export default SearchBar;
