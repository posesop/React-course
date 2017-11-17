import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import entitiesReducer from './entities/reducer';

export default combineReducers({
  entities: entitiesReducer,
  router: routerReducer,
})