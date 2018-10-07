import React, { Component } from 'react';
import './main.css';
import Content from './content.js';
import Menu from './menu.js';
import { NightService, GoodService, DisruptedService } from './indicators.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transportLines: [],
      selectedOption: []
    }
    this.loadApi = this.loadApi.bind(this);
  }

  componentDidMount() {
    this.loadApi();
  }

  loadApi() {
    fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          result.sort(function (a, b) {
            const nameA = a.modeName.toUpperCase();
            const nameB = b.modeName.toUpperCase();
            const nameAa = a.name.toUpperCase();
            const nameBb = b.name.toUpperCase();

            if (nameA === nameB) {
              if (nameAa < nameBb) {
                return -1;
              }
              if (nameAa > nameBb) {
                return 1;
              }

              return 0;
            }

            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          })

          this.setState({
            transportLines: result
          })
        },
        (error) => {
          // console.log(error);
        }
      );
  }


  render() {
    return (
      <div className="container">
        <ul className="menu-key">
          <li><NightService /> - indicates a night service</li>
          <li><GoodService /> - indicates a good service</li>
          <li><DisruptedService /> - indicates disruptions in the service</li>
        </ul>
        <div className="my-row">
          <div className="menu-holder">
            <Menu menuItems={this.state.transportLines} />
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