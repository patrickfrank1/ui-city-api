import React from 'react';

class SearchResults extends React.PureComponent {
  render() {
    const rows = this.props.results.map((el, i) => (
      <tr key={i}>
        <td>{JSON.stringify(el)}</td>
      </tr>
    ));
    return (
      <table>
        {rows}
      </table>
    );
  }
}

export default SearchResults;
