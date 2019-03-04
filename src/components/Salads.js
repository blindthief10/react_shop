import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { saladsInfo } from '../config/info';

export default class Salads extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Choose our salads for a more healthy life!</h2>
        {saladsInfo.map((salad, index) => {
            return (
              <div className="container" key={index}>
                <h4 className="title mb-2" identifier={salad.productName}>{salad.productName}</h4>
                <button>-</button><input type="text" /><button>+</button>
                <br />
                <div className="mt-3">
                <button className="btn btn-success">Add to Order</button><span><strong>&nbsp;{salad.price}$</strong></span>
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
