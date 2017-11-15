import React, { Component } from 'react';
import PropTypes from 'prop-types';


import User from './User';


const UserList = ({ users, sortField }) => (

  <ul>
    {
      users
      .sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1))
      .map((user) => <li key={user.id}><User {...user} /></li>)
    }
  </ul>
)

export default UserList;

UserList.propTypes = {
  users: PropTypes.array,
  sortField: PropTypes.string
};

UserList.defaultProps = {
  users: [],
  sortField: 'name'
};
