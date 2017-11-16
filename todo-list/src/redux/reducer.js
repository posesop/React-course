import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import tasksReducer from './tasks/reducer';

export default combineReducers({
  tasks: tasksReducer,
  router: routerReducer,
})