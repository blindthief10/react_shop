import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { saladsInfo } from '../config/info';

export default class Salads extends Component {
  render() {
    return (
      <>
        <h2 className="title mb-4">Here are all the Salads!</h2>
        <NavLink to="/products">Go to Products Page</NavLink>
      </>
    )
  }
}
