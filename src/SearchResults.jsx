import React from 'react';

class SearchResults extends React.PureComponent {
  render() {
    const rows = [...Array(10)].map((num) => (
      <tr key={num}>
        <td>col1</td>
        <td>col2</td>
        <td>col3</td>
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
