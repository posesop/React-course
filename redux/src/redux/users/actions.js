import { 
  FETCH_USERS_START,
  FETCH_USERS_END
} from './constants';
import api from '../../api'

/* Action creators

  AQUI LA LOGICA DE NEGOCIO

  REDUX SIDE EFFECTS: redux-thunk
*/

export const fetUsersStart = () => ({
  type: FETCH_USERS_START
});

export const fetUsersEnd = (user) => ({
  type: FETCH_USERS_END,
  payload: user
});


export const fetchUsers = () => async (dispatch /*, getState */) => {
  dispatch(fetUsersStart());
  const data = await api.fetchUsers();
  dispatch(fetUsersEnd(data));
}

