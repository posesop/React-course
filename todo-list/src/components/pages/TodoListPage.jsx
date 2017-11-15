import React, { Component } from 'react';
import TaskList from '../Tasks/TaskList';
import TaskForm from '../Tasks/TaskForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TodoListPage extends Component {
  render() {
    return (
      <div className='app'>
        <h1>TODO LIST app</h1>
        <TaskList tasks={this.props.tasks} />
        <TaskForm />
      </div>
    );
  }
}

TodoListPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = ({ tasks }) => {
  tasks: tasks.list
};

export default connect(mapStateToProps, null)(TodoListPage);