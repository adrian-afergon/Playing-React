import React, { Component } from 'react';
import './Square.css'

class Square extends Component {

  constructor(){
    super();
    this.state = {
      value:null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
