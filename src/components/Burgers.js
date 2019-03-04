import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { burgersInfo } from '../config/info';

export default class Burgers extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Here are all the Burgers!</h2>
        <NavLink to="/products">Go to Products Page</NavLink>
      </>
    )
  }
}
