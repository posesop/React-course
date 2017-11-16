/*NO HACE PETICIONES */

import { 
  ADD_TASK, 
  REMOVE_TASK 
} from './constants';

import tasksMock from 'mocks/tasks.json';

const INITIAL_STATE = {
  list: tasksMock
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TASK: 
      return {
        list: [
          ...state.list,
          action.payload
        ]
      }
    case REMOVE_TASK: 
      const list = state.list.filter(task => task.id !== action.payload);
      return { list }
    default:
      return state;
  }
}