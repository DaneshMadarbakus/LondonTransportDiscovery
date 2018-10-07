import React, { Component } from 'react';
import './content.css';

class Content extends Component {
  render() {
    const { selectedOption } = this.props;
    let optionContent = '';
    if (selectedOption.length < 1) {
      optionContent = <p className="heading">Select Transport to view more</p>;
    } else {
      optionContent = <div>
        <p className="heading">{selectedOption.name}</p>
        <p>hello</p>
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