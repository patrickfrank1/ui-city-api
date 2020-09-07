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
