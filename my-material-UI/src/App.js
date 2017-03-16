import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    injectTapEventPlugin();
    return (
      <div className="App">
        <RaisedButton label="Default" />
      </div>
    );
  }
}

export default App;
