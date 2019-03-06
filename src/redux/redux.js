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
      // the value has to be always a string in an input field otherwise cannot be changed and throws error!
      updatedState.pizzaValues[pizzaInputIdentity] = action.event.target.value;
      return updatedState;
    case 'pizzaIncrement':
      const buttonIncIdentity = action.event.target.getAttribute('identity');
      // We want to increase though, thus it has to be parsed as a number before increasing, otherwise is concat operator
      updatedState.pizzaValues[buttonIncIdentity] = parseInt(state.pizzaValues[buttonIncIdentity]) + 1
      return updatedState;
    case 'addPizza':
      const product = action.event.target.getAttribute('product');
      const price = parseFloat(action.event.target.getAttribute('price'));
      const buttonIdentifier = parseInt(action.event.target.getAttribute('buttoncounter'));

      // Try to find the item that already is in the basket if exists. No need for loop! Find method loops already.
      const itemFound = updatedState.basket.find(item => item.product === product); // If found will return the object
      // If not an empty object. {} which is a 'falsy' value. Thus itemFound can be used in an if statement directly.

      if (itemFound) {
        // Update only the quantity of this item (object)
        itemFound.quantity = parseInt(updatedState.pizzaValues[buttonIdentifier]);
      } else {
        // push a new item with all the associated info within
        const pizzaObject = {product: product, price: price, quantity: parseInt(updatedState.pizzaValues[buttonIdentifier])};
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
