import React, { Component } from 'react';
import './content.css';
import CycleContent from './cycle.js';

class Content extends Component {
  render() {
    const { selectedOption, disruptedStatus, cycleSelected, cycleSubmit, noCycleEntry, cycleLocations, cycleSearch } = this.props;
    let optionContent = '';
    if (cycleSelected){
      optionContent = <CycleContent cycleSubmit={cycleSubmit} noCycleEntry={noCycleEntry} cycleLocations={cycleLocations} cycleSearch={cycleSearch} />
    } else if (selectedOption.length < 1) {
      optionContent = <p className="heading">Select Transport to view more</p>;
    } else if (disruptedStatus !== true) {
      optionContent = <div>
        <p className="heading">No service disruptions</p>
      </div>;
    } else {
      optionContent = <div>
      <p className="heading">Service currently suffering disruptions</p>
      <ul>
      {
        selectedOption.lineStatuses.map((statuses, i) => {
          return(
              <li key={i}>{statuses.reason}</li>
          )
        })
      }
      </ul>
    </div>;
    }

    return (
      <div className="content">
        <div className="active-content">
          {optionContent}
        </div>
      </div>
    );
  }
}

export default Content;