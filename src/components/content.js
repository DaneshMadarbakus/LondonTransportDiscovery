import React, { Component } from 'react';
import './content.css';

class Content extends Component {
  render() {
    const { selectedOption, disruptedStatus } = this.props;
    let optionContent = '';
    if (selectedOption.length < 1) {
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
        selectedOption.lineStatuses.map((statuses) => {
          return(
              <li>{statuses.reason}</li>
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