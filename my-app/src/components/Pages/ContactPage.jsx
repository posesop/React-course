import React, { Component } from 'react';
import debounce from 'lodash/debounce'

export default class ContactPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      question: '',
    };

    this.onInputChange = debounce(this.onInputChange, 300);
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submited");
  }


  formInpuntChangeHandler = (event) => {
    event.persist();
    this.onInputChange(event);
  }
  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <div>
            <label htmlFor="userName">UserName: </label>
            <input onChange={this.formInpuntChangeHandler} name="userName" id="userName" type="text" />
          </div><br />
          <label htmlFor="question">Question: </label>
          <textarea onChange={this.formInpuntChangeHandler} name="question" id="question" />
          <button>Submit</button>
        </form>
        <div>
          <h2>Preview</h2>
          <p>Name: {this.state.userName}</p>
          <p>Question: {this.state.question}</p>
        </div>
      </div>
    )
  }
}