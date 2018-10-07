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
      selectedOption: [],
      currentOptionDisrupted: false
    }

    this.loadApi = this.loadApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    const value = event.target.value;
    const selection = this.state.transportLines.find((obj) => { return obj.name === value; });;
    let disruptedStatus = false;

    if(selection.lineStatuses.filter((lineStatus) => { return lineStatus.statusSeverity !== 10 }).length > 0){
      disruptedStatus = true
    }

    this.setState({
      selectedOption: selection,
      currentOptionDisrupted: disruptedStatus
    });
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
            <Menu menuItems={this.state.transportLines} runChange={this.handleChange} />
          </div>
          <div className="content-holder">
            <Content selectedOption={this.state.selectedOption} disruptedStatus={this.state.currentOptionDisrupted} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;