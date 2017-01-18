import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserList from './UserList';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/list" component={UserList}/>
  </Router>
  ,
  document.getElementById('root')
);
