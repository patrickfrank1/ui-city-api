/* eslint-disable max-classes-per-file */
import React from 'react';
import './SearchResults.css';

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
    if (this.props.results === null) {
      return null;
    }
    const rows = this.props.results.map((el, i) => (
      <TableEntry key={i} name={el.name} score={el.score} latitude={el.latitude} longitude={el.longitude} />
    ));
    return (
      <table>
        <tbody>
          <tr>
            <th>City</th>
            <th>Score</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
