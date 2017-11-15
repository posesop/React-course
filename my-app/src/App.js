import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import UsersPage from './components/Pages/UsersPage';
import ContactPage from './components/Pages/ContactPage';
import Navigation from './components/Navigation/index';


class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <div>
          <Navigation />
            <Switch>
              <Route exact path="/" component={UsersPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
