import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showUsers} from './actions';

class App extends Component {

  componentWillMount(){
    this.props.showUSers();
  }

  renderUsersList(){
    return this.props.users.map((user) =>{
      return(
        <li key={user.id}>{user.name}</li>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Users List</h2>
        <ul>
          {this.rendrUsersList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users:state.user.list
  }
}

export default connect(mapStateToProps,{showUsers})(App);
