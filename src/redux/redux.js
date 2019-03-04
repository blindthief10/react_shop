import { createStore } from 'redux';

const reducer = (state = initialState, action) {
  const updatedState = {...state};

  switch(action.type) {
    case 'DEF':
      return updatedState;
    default:
      return state;
  }
}

export const store = createStore(reducer);
