import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTask } from "redux/tasks/actions";

class TaskForm extends Component {

  constructor(props){
    super(props);
    this.formNodes = {};
  }

  refFn = (node) => {
    this.formNodes[node.name] = node;
  }

  clearForm = () => {
    Object.keys(this.formNodes).forEach(nodeName => 
      this.formNodes[nodeName].value = ''
    );
  }

  formSubmitHandler = (event) => {
    event.preventDefault();

    this.props.addTask({
      name: this.formNodes.name.value,
      priority: +this.formNodes.priority.value,
      owner: this.formNodes.owner.value,
    });

    this.clearForm();
  }


  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
      <fieldset>
        <legend>Create a task</legend>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref={this.refFn} name="name" id="name" type="text"/>
          <br/>
          <label htmlFor="priority">Priority:</label>
          <input ref={this.refFn} name="priority" id="priority" type="number"/>
          <br/>
          <label htmlFor="owner">Owner:</label>
          <input ref={this.refFn} name="owner" id="owner" type="text"/>
        </div>
        <br/>
        <button>Create awesome task</button>
      </fieldset>
    </form>
    )
  }
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
}


const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(TaskForm);