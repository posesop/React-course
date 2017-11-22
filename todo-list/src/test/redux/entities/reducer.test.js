import * as types from 'redux/entities/constants';
import reducer from 'redux/entities/reducer';

describe('Entities reducer', () => {

  xit('Should return the initial state', () => {
    const initialState = {
      // Initial state has mocked normalized data!!
      result: [0, 1, 2],
      tasks: {
        '0': { id: 0, name: 'Aprueba la PR', owner: 'Rodrigo', priority: 2 },
        '1': { id: 1, name: 'Aprende FP', owner: 'Pose', priority: 1 },
        '2': { id: 2, name: 'Deja de hablar', owner: 'Jacano', priority: 0 }
      }
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it ('Shoul handle MERGE_ENTITIES action', () => {
    const expectedState = {
      result: [0, 1],
      tasks: {
        0: {},
        1: {},
      }
    };

    const previousState = {
      result: [0],
      tasks: {
        0: {},
      }
    };

    const action = {
      type: types.MERGE_ENTITIES,
      entityId: 1,
      payload: {
        1: {}
      },
    };

    expect(reducer(previousState, action)).toEqual(expectedState);

  });
  it ('Shoul handle REMOVE_ENTITY action', () => {
    const expectedState = {
      result: [1],
      tasks: {
        1: {},
      }
    };

    const previousState = {
      result: [0, 1],
      tasks: {
        0: {},
        1: {},
      }
    };

    const action = {
      type: types.REMOVE_ENTITY,
      payload: {
        id: 0,
        entity: 'tasks',
      },
    };

    expect(reducer(previousState, action)).toEqual(expectedState);

  });
});
