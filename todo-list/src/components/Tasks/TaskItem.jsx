import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { removeTask } from "redux/entities/actions";
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';


const priorityClassName = [
  'task-item--low',
  'task-item--medium',
  'task-item--high',
];

const TaskItem = ({ id, name, priority, owner, removeTask }) => (
  <div className={`task-item ${priorityClassName[priority]}`}>
    <NavLink to={`/tasks/${id}`}>
      <div>{id} - {name} <span>({priority})</span></div>
      <div>{owner}</div>
    </NavLink>
    <button onClick={() => removeTask(id)} className="task-item__btn">💣</button>
  </div>
)

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.number,
  owner: PropTypes.string.isRequired
};

TaskItem.defaultProps = {
  priority: 0
};

const mapDispatchToProps = {
  removeTask
};

export default connect(null, mapDispatchToProps)(TaskItem);
