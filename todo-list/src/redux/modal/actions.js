import { OPEN, CLOSE } from './constants';


export const openModal = (child, childProps) => ({
  type: OPEN,
  payload: {
    child,
    childProps
  }

});

export const closeModal = child => ({
  type: CLOSE,
});