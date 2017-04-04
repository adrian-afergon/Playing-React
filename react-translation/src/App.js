import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// at the top of your app
import { TranslatorProvider } from "react-translate"
// when you require a translator
import { translate } from "react-translate"


const language = (
  available.hasOwnProperty(navigator.language) ? navigator.language : "en-en"
)

const loadTranslations = (l) =>
  fetch(`/i18n/${ l }.json`)
    .then((res) => res.json())

class App extends Component {
  render() {
    return (
      <TranslatorProvider translations={object}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </TranslatorProvider>
    );
  }
}

export default App;
