import React, { Component } from 'react';
import TeaBag from "./TeaBag";

export default class Section5 extends Component {
  render() {
    const {teaName, selectedFlavors} = this.props;
    return (
      <div className="row top-padding">
        <div className="col-xs-6 bag-container">
          <TeaBag 
            teaName={teaName}
            selectedFlavors={selectedFlavors}
          />
        </div>
        <div className="col-xs-5">
          <div className="subtext">
            Congrats! You just made a custom slurp. We think it looks tasty. If you agree, head to our payments page.
          </div>
          <button className="btn slurp-btn">Checkout</button>
        </div>
      </div>
    )
  }
}