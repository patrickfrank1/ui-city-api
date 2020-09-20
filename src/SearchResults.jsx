/* eslint-disable max-classes-per-file */
import React from 'react';

class TableEntry extends React.PureComponent {
  render() {
    // eslint-disable-next-line react/prop-types
    const { name, latitude, longitude, score, key } = this.props;
    return (
      <tr key={key}>
        <td>{name}</td>
        <td>{score}</td>
        <td>{latitude}</td>
        <td>{longitude}</td>
      </tr>
    );
  }
}

class SearchResults extends React.PureComponent {
  render() {
    const rows = this.props.results.map((el, i) => (
      <TableEntry key={i} name={el.name} score={el.score} latitude={el.latitude} longitude={el.longitude} />
    ));
    return (
      <table>
        <th>
          <td>City</td>
          <td>Score</td>
          <td>Latitude</td>
          <td>Longitude</td>
        </th>
        {rows}
      </table>
    );
  }
}

export default SearchResults;
