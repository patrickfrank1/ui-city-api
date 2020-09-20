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
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accesstoken': this.props.accessToken
      }
    }).then(res => {
      if (res.status >= 400) {
        res.text().then(resText => {
          console.log(resText, "error");
        });
      } else {
        res.json().then(data => {
            this.props.setData(data.suggestions);
            console.log(data);
        });
      }
    }).catch(err => {
      console.log("Internal server error.", "error");
      console.log(err);
    });

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
