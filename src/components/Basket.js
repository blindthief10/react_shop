import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {orderSubmitted: false};
    this.submitOrder = this.submitOrder.bind(this);
  }

  submitOrder(ev) {
    this.setState({orderSubmitted: true});
  }

  componentWillUnmount() {
    this.setState({orderSubmitted: false});
  }
  render() {
    return (
      <>
        <h2 className="title">This is the basket</h2>
        <button className="btn btn-lg btn-primary" onClick={this.submitOrder}>Submit order</button>
        {this.state.orderSubmitted && <Redirect to="/confirmation" />}
      </>
    )
  }
}
