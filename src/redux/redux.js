import { createStore } from 'redux';

const initialState = {
  pizzaValues: [0, 0, 0]
}

const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch(action.type) {
    case 'changePizzaValue':
      const pizzaInputIdentity = action.event.target.getAttribute('identity'); 
      updatedState.pizzaValues[pizzaInputIdentity] = action.event.target.value;
      return updatedState;
    case 'pizzaIncrement':
      const buttonIncIdentity = action.event.target.getAttribute('identity');
      updatedState.pizzaValues[buttonIncIdentity] = state.pizzaValues[buttonIncIdentity] + 1
      return updatedState;
    default:
      return state;
  }
}

export const change = ev => {
  return {type: 'changePizzaValue', event: ev}
}

export const increment = ev => {
  return {type: 'pizzaIncrement', event: ev}
}

export const store = createStore(reducer);
