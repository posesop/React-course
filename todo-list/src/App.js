import React, { Component } from 'react';
import Router from './router';
import Modal from './components/ui/Modal';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <main role="main">
          <Router />
        </main>
        <Modal />
      </div>
    );
  }
}
