import React, { Component } from 'react';

import './App.css';
import Board from './Board/Board.js';

class App extends Component {
  constructor() {
      super();
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        xIsNext: true
      };
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tic Tac Toe</h2>
          <h3>Do you wanna play?</h3>
        </div>
        <div className="game-board">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
