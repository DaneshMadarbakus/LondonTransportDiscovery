import React, { Component } from 'react';
import './styles.css';
import { NightService, GoodService, DisruptedService } from '../Indicators';
import { RadioInput, RadioInputWithIcons } from '../RadioInputs';

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
                <div>
                  <RadioInputWithIcons 
                    value={line.name} 
                    name="lines" 
                    onChangeFn={this.props.runChange} 
                    text={line.name}>{night}{serviceStatus}</RadioInputWithIcons>
                </div>
              )
            }
            )
          }
          <div>
            <RadioInput value="cycle" name="lines" onChangeFn={this.props.runChange} text="Cycle Hire" />
          </div>
        </form>
      </div>
    );
  }
}

export default Menu;