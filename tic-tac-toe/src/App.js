import React, { Component } from 'react';

import './App.css';
import Game from './Game/Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tic Tac Toe</h2>
          <h3>Do you wanna play?</h3>
        </div>
        <div className="game-board">
          <Game/>
        </div>
      </div>
    );
  }
}

export default App;
