import React, { Component } from 'react';
import './main.css';
import Content from './content.js';
import Menu from './menu.js';
import {NightService, GoodService, DisruptedService} from './indicators.js';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="my-row">
          <div className="menu-holder">
            <ul className="menu-key">
              <li><NightService /> indicates a night service</li>
              <li><GoodService />indicates a good service</li>
              <li><DisruptedService />indicates disruptions in the service</li>
            </ul>
            <Menu />
          </div>
          <div className="content-holder">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;