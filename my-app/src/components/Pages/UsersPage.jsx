import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from '../User/UserList';
import BtnList from '../BtnList/index';
import userMock from '../../mocks/users.json'
import withFeaturedFlag from '../../Hocs/withFeaturedFlag';

const sortItems = [
  {
    label: 'Age',
    value: 'age',
  },
  {
    label: 'Name',
    value: 'name',
  }
];

export default class UsersPage extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      users: [],
      sortField: 'age'
      
    };
  }
  
  componentDidMount() {
    setTimeout(
      () => this.setState({ users: userMock })
      ,500
    )
  }

  sortHandler = (sortField) => {
    this.setState({ sortField });
  }

  render() {
    return (
      <div>
        <BtnList 
          value={this.state.sortField}
          items={sortItems} 
          onChange={this.sortHandler} 
        />
        <UserList users={this.state.users} sortField={this.state.sortField}/>
      </div>
    );
  }
}
