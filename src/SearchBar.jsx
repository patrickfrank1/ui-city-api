import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      latitude: '',
      longitude: ''
    };
  }

  handleChange = (target, e) => {
    return (e) => this.setState({[target]: e.target.value});
  }

  handleSubmit = () => {
    let querystring = "https://city-search-node-api.herokuapp.com/suggestions?q=";
    // query
    if (this.state.input === '') {
      this.props.handleMessage("Please search for something, anything.", "error");
    } else {
      querystring += this.state.input;
      // latitude
      if (this.state.latitude !== '') {
        querystring += `&latitude=${this.state.latitude}`;
      }
      // longitude
      if (this.state.longitude !== '') {
        querystring += `&longitude=${this.state.longitude}`;
      }
    }
    // fetch
    fetch(querystring,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accesstoken': this.props.accessToken
      }
    }).then(res => {
      if (res.status >= 400) {
        res.text().then(resText => {
          this.props.handleMessage(resText, "error");
        });
      } else {
        res.json().then(data => {
            this.props.setData(data.suggestions);
        });
      }
    }).catch(err => {
      this.props.handleMessage("Internal server error.", "error");
      console.log(err);
    });

    this.setState({input: '', latitude: '', longitude: ''});
  }

  render = () => {
    return (
      <div className="bar">
        <button onClick={this.handleSubmit}>&#128270;</button> {/*🔎*/}
        <input type='text' className="inputQuery" value={this.state.input} placeholder='search query' onChange={this.handleChange('input')} />
        <input type='number' min='-90' max='90' value={this.state.latitude} placeholder='latitude' onChange={this.handleChange('latitude')} />
        <input type='number' min='-180' max='180' value={this.state.longitude} placeholder='longitude' onChange={this.handleChange('longitude')} />
      </div>
      
    );
  }
}

export default SearchBar;
