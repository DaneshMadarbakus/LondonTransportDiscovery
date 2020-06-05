import React, { Component } from 'react';
import './styles.css';
import { NightService, GoodService, DisruptedService } from '../Indicators';
import { RadioInput, RadioInputWithIcons } from '../RadioInputs';
import * as helpers from '../../utils/helpers';

class Menu extends Component {

  render() {
    const { menuItems } = this.props;
    return (
      <form>
        {
          menuItems.map(line => {
            const night = helpers.isNightService(line) ? <NightService /> : null;
            const serviceStatus = helpers.isDisruptedService(line) ? <DisruptedService /> : <GoodService />;

            return (
              <RadioInputWithIcons
                value={line.name}
                name="lines"
                onChangeFn={this.props.runChange}
                text={line.name}>{night}{serviceStatus}</RadioInputWithIcons>
            )
          }
          )
        }
        <RadioInput value="cycle" name="lines" onChangeFn={this.props.runChange} text="Cycle Hire" />
      </form>
    );
  }
}

export default Menu;