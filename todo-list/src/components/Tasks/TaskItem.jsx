import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ id, name, priority, owner }) => (
  <div className="task-item">
    <div>{id} - {name} <span>({priority})</span></div>
    <div>{owner}</div>
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

export default TaskItem;