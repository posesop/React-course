/*NO HACE PETICIONES */
import { normalize } from 'normalizr';
import taskListSchema from "schemas/tasks";
import merge from 'lodash/fp/merge';

import { 
  MERGE_ENTITIES, 
  REMOVE_ENTITY 
} from './constants';

import tasksMock from 'mocks/tasks.json';
const normalizedData = normalize(tasksMock, taskListSchema);

// Initial state
const INITIAL_STATE = {
  ...normalizedData.entities,
  result: normalizedData.result
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case MERGE_ENTITIES: 
      return {
        tasks: merge(action.payload, state.tasks),
        result: [ ...state.result, action.entityId]
      }
    case REMOVE_ENTITY: 
      const newState = { ...state };
      delete newState[action.payload.entity][action.payload.id];
      newState.result = newState.result.filter(id => id !== action.payload.id);
      return newState
       
    default:
      return state;
  }
}

// Selectors
export const getTasks = state => 
  state.entities.result.map(id => state.entities.tasks[id])
