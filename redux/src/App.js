import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchUsers } from './redux/users/actions';

class App extends Component {

  getUsers = () => {
    this.props.fetchUsers();
  };
  
  render() {
    return (
      <div className="App">
        <h1>Redux app</h1>
        <button onClick={this.getUsers}>Get users</button>
        {
          this.props.loading ? <span>Loading...</span> :
          <ul>
            {
              this.props.users.map(user => <li key={user.id}>{user.name}</li>)
            }
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ 
  users: users.list,
  loading: users.loading
});

const mapDispatchToProps ={ 
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
