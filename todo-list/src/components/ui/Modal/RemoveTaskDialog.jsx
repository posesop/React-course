import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTask } from 'redux/entities/actions';
import { closeModal } from 'redux/modal/actions';

class RemoveTaskDialog extends Component {

  removeTask = () => {
    const { removeTask, closeModal, taskId } = this.props;
    removeTask(taskId);
    closeModal();
  }
  render() {
    const { taskId } = this.props;
    return (
      <div className="dialog">
      <p>Are you sure you want to remove the task {taskId}?</p>
      <ul>
        <li>
          <button onClick={this.removeTask}>Yes✅</button>
        </li>
        <li>
          <button onClick={this.props.closeModal}>No❌</button>
        </li>
      </ul>
    </div>
    );
  }
} 

RemoveTaskDialog.propTypes = {
  removeTask: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}


const mapDispatchToProps = {
  removeTask,
  closeModal,
};
export default connect(null, mapDispatchToProps)(RemoveTaskDialog);