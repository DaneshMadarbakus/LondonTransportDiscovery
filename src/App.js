import React, { Component } from 'react';
import './App.css';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>London Transport Discovery</h1>
        </header>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
