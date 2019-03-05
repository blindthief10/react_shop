import { createStore } from 'redux';

const initialState = {
  pizzaValues: [0, 0, 0],
  basket: []
}

const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch(action.type) {
    case 'changePizzaValue':
      const pizzaInputIdentity = action.event.target.getAttribute('identity');
      updatedState.pizzaValues[pizzaInputIdentity] = parseInt(action.event.target.value);
      return updatedState;
    case 'pizzaIncrement':
      const buttonIncIdentity = action.event.target.getAttribute('identity');
      updatedState.pizzaValues[buttonIncIdentity] = state.pizzaValues[buttonIncIdentity] + 1
      return updatedState;
    case 'addPizza':
      const product = action.event.target.getAttribute('product');
      const price = parseFloat(action.event.target.getAttribute('price'));
      const buttonIdentifer = parseInt(action.event.target.getAttribute('buttoncounter'));
      let isIncluded = false;

      for (let i=0; i < state.basket.length; i++) {
        if (product === state.basket[i].product) {
          isIncluded = true;
          state.basket[i].quantity = state.pizzaValues[buttonIdentifer];
          break;
        }
      }

      // for (let item of state.basket) {
      //   if (product === item.product) {
      //     isIncluded = true;
      //     item.quantity =  state.pizzaValues[buttonIdentifer];
      //     break;
      //   }
      // }

      if (!isIncluded) {
        const pizzaObject = {product: product, price: price, quantity: state.pizzaValues[buttonIdentifer]};
        updatedState.basket = [...state.basket, pizzaObject];
      }

      console.log(updatedState.basket);
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

export const addToOrder = ev => {
  return {type: 'addPizza', event: ev}
}
export const store = createStore(reducer);
