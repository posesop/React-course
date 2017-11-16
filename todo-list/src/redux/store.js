import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from "react-router-redux";
import reducer from './reducer';
import thunk from 'redux-thunk';
import history  from "common/history";
// Middleware entre el dispatch y el reducer, decide si ejecutar el reducer

const router = routerMiddleware(history);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(router, thunk),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

  )
);

export default store;