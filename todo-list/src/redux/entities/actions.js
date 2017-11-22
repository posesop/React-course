import { 
  MERGE_ENTITIES,
  REMOVE_ENTITY
} from './constants';

/* Action creators

  AQUI LA LOGICA DE NEGOCIO

  REDUX SIDE EFFECTS: redux-thunk
*/

let taskId = 3;

export const addTask = (task) => {
  const id = ('id' in task) ? task.id : taskId++;
  return {
    type: MERGE_ENTITIES,
    entityId: id,
    payload: {
      [id]: {
          id,
          ...task
      }
    },
  }
};

export const removeTask = (taskId) => ({
  type: REMOVE_ENTITY,
  payload: {
    id: taskId,
    entity: 'tasks',
  }
});