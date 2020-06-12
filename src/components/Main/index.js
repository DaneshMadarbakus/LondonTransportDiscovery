import React, { Component } from 'react';
import './styles.css';
import Content from '../Content';
import Menu from '../Menu';
import { NightService, GoodService, DisruptedService } from '../Indicators';
import { Box } from '../Box';
import * as helpers from '../../utils/helpers';
import { RSContainer } from '../RSContainer';
import { RSRow } from '../RSRow';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transportLines: [],
      selectedOption: [],
      currentOptionDisrupted: false,
      isCycle: false,
      cycleLocations: [],
      noCycleEntry: false,
      cycleSearch: ''
    }

    this.loadApi = this.loadApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCycleSubmit = this.handleCycleSubmit.bind(this);
    this.cachedSearchResults = { test: 'test' };
  }

  componentDidMount() {
    this.loadApi();
  }

  loadApi() {
    fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
      .then(res => res.json())
      .then(
        (result) => {
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
    if (value === 'cycle') {
      this.setState({
        isCycle: true
      });
      return;
    }
    const selection = this.state.transportLines.find((obj) => { return obj.name === value; });;
    const disruptedStatus = helpers.isDisruptedService(selection);

    this.setState({
      selectedOption: selection,
      currentOptionDisrupted: disruptedStatus,
      isCycle: false
    });
  }

  handleCycleSubmit(e) {
    e.preventDefault();
    if (e.target.search.value.length === 0) {
      this.setState({
        noCycleEntry: true
      });
      return;
    }
    const searchString = e.target.search.value;
    if (this.cachedSearchResults[searchString]) {
      this.setState({
        cycleLocations: this.cachedSearchResults[searchString],
        cycleSearch: searchString,
        noCycleEntry: false
      });
      return;
    }

    fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${searchString}`)
      .then(res => res.json())
      .then((result) => {
        this.cachedSearchResults[searchString] = result;

        this.setState({
          cycleLocations: result,
          cycleSearch: searchString,
          noCycleEntry: false
        })
      },
        (error) => {
          // console.log(error);
        }
      )
  }

  render() {
    return (
      <main>
        <div className="container">
          <ul className="menu-key">
            <li><NightService /> - indicates a night service</li>
            <li><GoodService /> - indicates a good service</li>
            <li><DisruptedService /> - indicates disruptions in the service</li>
          </ul>
          <RSContainer>
            <RSRow>
              <Box>
                <Menu menuItems={this.state.transportLines} runChange={this.handleChange} />
              </Box>

              <div className="content-holder">
                <Content selectedOption={this.state.selectedOption} disruptedStatus={this.state.currentOptionDisrupted} cycleSelected={this.state.isCycle} cycleSubmit={this.handleCycleSubmit} noCycleEntry={this.state.noCycleEntry} cycleLocations={this.state.cycleLocations} cycleSearch={this.state.cycleSearch} />
              </div>
              </RSRow>
          </RSContainer>
        </div>
      </main>
    );
  }
}

export default Main;