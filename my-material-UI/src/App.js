import React, { Component } from 'react';
import './App.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import BottomNavigationExampleSimple from './BottomNavigationExampleSimple';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarExample from './AppBarExample';

class App extends Component {

  constructor(props: any) {
    injectTapEventPlugin();
    super(props);
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBarExample/>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
