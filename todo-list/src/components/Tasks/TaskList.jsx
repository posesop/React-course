import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TaskList = ({ tasks }) => (
  <TransitionGroup component="ul" className="task-list">
    {
      tasks.map(task => 
        <CSSTransition key={task.id} timeout={1000} classNames="fade" >
        <li >
          <TaskItem { ...task } />
        </li>
        </CSSTransition>
      )
    }
  </TransitionGroup>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;