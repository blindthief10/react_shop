import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { pizzasInfo } from '../config/info';

export default class Pizzas extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Choose one of these lovely Pizzas!</h2>
        {pizzasInfo.map((pizza, index) => {
            return (
              <div className="container" key={index}>
                <h4 className="title" identifier={pizza.productName}>{pizza.productName}</h4>
                <button>-</button><input type="text" /><button>+</button>
                <br />
                <div className="mt-3">
                  <button className="btn btn-success">Add to Order</button><span><strong>&nbsp;{pizza.price}$</strong></span>
                </div>
                <hr />
              </div>
            )
          })
        }
        <NavLink to="/products">Go to Products Page</NavLink>
      </>
    )
  }
}
