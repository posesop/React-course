import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
// Middleware entre el dispatch y el reducer, decide si ejecutar el reducer
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f

  )
);

export default store;