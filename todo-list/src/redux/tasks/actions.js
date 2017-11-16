import { 
  ADD_TASK,
  REMOVE_TASK
} from './constants';

/* Action creators

  AQUI LA LOGICA DE NEGOCIO

  REDUX SIDE EFFECTS: redux-thunk
*/

let i = 3;

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: {
    id: i++,
      ...task
  },
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId
});