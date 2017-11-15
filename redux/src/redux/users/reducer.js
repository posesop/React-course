/*NO HACE PETICIONES */

import { 
  FETCH_USERS_START, 
  FETCH_USERS_END 
} from './constants';

const INITIAL_STATE = {
  list: [],
  loading:false,
  error: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_USERS_END':
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    default:
      return state;
  }
}