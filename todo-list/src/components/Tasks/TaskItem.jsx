import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { openModal } from "redux/modal/actions";
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';


const priorityClassName = [
  'task-item--low',
  'task-item--medium',
  'task-item--high',
];

const TaskItem = ({ id, name, priority, owner, openModal }) => (
  <div className={`task-item ${priorityClassName[priority]}`}>
    <NavLink to={`/tasks/${id}`}>
      <div>{id} - {name} <span>({priority})</span></div>
      <div>{owner}</div>
    </NavLink>
    <button onClick={() => openModal('RemoveTaskDialog', { taskId: id })} className="task-item__btn">💣</button>
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
  openModal
};

export default connect(null, mapDispatchToProps)(TaskItem);
