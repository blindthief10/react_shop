import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { burgersInfo } from '../config/info';

export default class Burgers extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Our Burgers are Delicious!</h2>
        {burgersInfo.map((burger, index) => {
            return (
              <div className="container" key={index}>
                <h4 className="title" identifier={burger.productName}>{burger.productName}</h4>
                <button>-</button><input type="text" /><button>+</button>
                <br />
                <div className="mt-3">
                  <button className="btn btn-success">Add to Order</button><span><strong>&nbsp;{burger.price}$</strong></span>
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
