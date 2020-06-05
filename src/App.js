import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          {/* ?? <Title type="h1">London Transport Discovery</Title> */}
          <h1>London Transport Discovery</h1>
        </Header>
        <Main />
      </div>
    );
  }
}

export default App;
