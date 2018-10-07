import React, { Component } from 'react';
import './cycle.css';

class Cycle extends Component {
  render() {
    let searchResults = '';
    console.log(this.props.cycleSearch);
    if (this.props.noCycleEntry){
      searchResults = <p>Please enter a search</p>;
    } else if (this.props.cycleLocations.length === 0 && this.props.cycleSearch.length > 0){
      searchResults = <p>no bike points found for {this.props.cycleSearch}</p>;
    } else {
      searchResults = <ul>
        {this.props.cycleLocations.map((location) => {
          return(
            <li key={location.id}>{location.id.substr(11)} {location.commonName} ({location.lat}, {location.lon})</li>
          )
        })}
      </ul>;
    }

    return (
      <div>
        <form className="cycle-form" onSubmit={this.props.cycleSubmit}>
          <label>
            Search for cycles to hire:
            <input type="text" name="search" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="cycle-results">
          {searchResults}
        </div>
      </div>

    );
  }
}

export default Cycle;