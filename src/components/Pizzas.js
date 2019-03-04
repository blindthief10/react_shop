import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { pizzasInfo } from '../config/info';

export default class Pizzas extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Here are all the Pizzas!</h2>
        <NavLink to="/products">Go to Products Page</NavLink>
      </>
    )
  }
}
