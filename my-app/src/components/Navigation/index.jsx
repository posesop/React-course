import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav role="navigation">
    <ul>
      <li>
        <NavLink activeClassName="selected" to="/">Users</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
)

export default Navigation;