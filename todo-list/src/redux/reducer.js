import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import entitiesReducer from './entities/reducer';
import modalReducer from './modal/reducer';

export default combineReducers({
  entities: entitiesReducer,
  router: routerReducer,
  modal: modalReducer,
})