import React, { Component } from 'react';
import './menu.css';
import { NightService, GoodService, DisruptedService } from './indicators.js';

class Menu extends Component {

  render() {
    const { menuItems } = this.props;
    return (
      <div className="menu">
        <form>
          {
            menuItems.map(line => {
              let night = '';
              let serviceStatus = '';
              if (line.serviceTypes.filter((serviceType) => { return serviceType.name === 'Night' }).length > 0) {
                night = <NightService />;
              } 

              if (line.lineStatuses.filter((lineStatus) => { return lineStatus.statusSeverity !== 10 }).length > 0) {
                serviceStatus = <DisruptedService />;
              } else {
                serviceStatus = <GoodService />;
              }

              return (
                <div key={line.name}>
                <label>
                  <input
                    tab-index="0"
                    type="radio"
                    value={line.name}
                    name="lines"
                    onChange={this.props.runChange}
                  />
                  <span className="name">{line.name}</span>
                  <span className="icons">
                    {night}{serviceStatus}
                  </span>                      
                </label>
              </div>
              )
            }
            )
          }
        </form>
      </div>
    );
  }
}

export default Menu;