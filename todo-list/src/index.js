import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";
import history from 'common/history';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
