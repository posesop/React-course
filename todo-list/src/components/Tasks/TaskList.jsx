import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => (
  <ul className="task-list">
    {
      tasks.map(task => {
        <li key={task.id}>
          <TaskItem { ...task } />
        </li>
      })
    }
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;