import React, { Component } from 'react';
import { Link } from 'react-router';

class List extends Component {
  render() {
    return (
      <ul role="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">Lista</Link></li>
      </ul>
    );
  }
}

export default List;
