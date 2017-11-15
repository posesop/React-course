import React, { Component } from 'react';
import TodoListPage from './components/pages/TodoListPage'
import './App.css';

export default class App extends Component {

  
  render() {
    return (
      <div className="App">
        <TodoListPage />
      </div>
    );
  }
}
