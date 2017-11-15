import React, { Component } from 'react';
import PropTypes from 'prop-types';

const User = ({ avatarUrl, name, age }) => (
    <div>
      {avatarUrl && <img style={{ height: '100px' }} src={avatarUrl} alt={name}/> }
      <span>Name: {name}</span>
      <span>Age: {age}</span>
    </div>
);

export default User;

User.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  age: PropTypes.number
};

User.defaultProps = {
  avatarUrl: false,
  age: undefined
};
