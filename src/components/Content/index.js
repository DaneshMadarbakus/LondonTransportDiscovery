import React, { Component } from 'react';
import './styles.css';
import CycleContent from '../Cycle';
import { HeadingTwo } from '../Headings';
import { Box } from '../Box';

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
        <HeadingTwo className="heading" text="No service disruptions" />
      </div>;
    } else {
      optionContent = <div>
      <HeadingTwo className="heading" text="Service currently suffering disruptions" />
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
      <Box>
        <div className="active-content">
          {optionContent}
        </div>
      </Box>
    );
  }
}

export default Content;