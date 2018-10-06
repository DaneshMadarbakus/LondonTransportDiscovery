import React, { Component } from 'react';
import './main.css';
import Content from './content.js';
import Menu from './menu.js';
import { NightService, GoodService, DisruptedService } from './indicators.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOptions: [],
      content: []
    }
    this.loadApi = this.loadApi.bind(this);
  }

  componentDidMount () {
    this.loadApi();
  }

  loadApi() {
    fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }


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