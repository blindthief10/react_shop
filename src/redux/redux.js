import { createStore } from 'redux';

const initialState = {
  pizzaValues: [10, 20, 30]
}

const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch(action.type) {
    case 'changePizzaValue':
      const pizzaInputIdentity = action.event.target.getAttribute('identity'); //2
      updatedState.pizzaValues[pizzaInputIdentity] = action.event.target.value;
      return updatedState;
    default:
      return state;
  }
}

export const change = ev => {
  return {type: 'changePizzaValue', event: ev}
}

export const store = createStore(reducer);
