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
        <div className="col-xs-6"></div>
      </div>
    )
  }
}