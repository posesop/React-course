import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TaskList = ({ children }) => (
  <TransitionGroup component="ul" className="task-list">
    {
      React.Children.map(children, child => 
        <CSSTransition timeout={1000} classNames="fade" >
        <li>{child}</li>
      </CSSTransition>
      )
    }
  </TransitionGroup>
);

TaskList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
};


export default TaskList;