import { 
  ADD_TASK,
  REMOVE_TASK
} from './constants';

/* Action creators

  AQUI LA LOGICA DE NEGOCIO

  REDUX SIDE EFFECTS: redux-thunk
*/

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId
});