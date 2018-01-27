import React, { Component } from 'react';

export default class Section3 extends Component {
  getFlavorCol(flavors) {
    return flavors.map((flavor, key) => {
      return (
        <div className="tea flavor" key={key} onClick={this.props.setSelectedFlavors.bind(this, flavor)}>
          <img className="flavor-img" src={`./img/${flavor.image}`} alt={flavor.name}/>
          <h3>{flavor.name}</h3>
        </div>
      )
    })
  }
  
  showSelectedFlavors(flavors) {
    let flavorDisplay = [];
    for (var i = 0; i < 3; i++) {
      if (!flavors[i]) { 
        flavorDisplay.push({}) 
      } else {
        flavorDisplay.push(flavors[i]);
      }
    }
    
    return flavorDisplay.map((flavor, key) => {
      return (
        <div key={key} className="flavor">
          {
            flavor.name ? 
              <img className="flavor-img" src={`./img/${flavor.image}`} alt={flavor.name}/>
            :
              <div className="empty"></div>
          }
        </div>
      )
    })
  }
  
  render() {
    const {allFlavors, baseTea, selectedFlavors} = this.props;
    return (
      <div className="row">
        <div className="tea col-xs-4">
          {
            baseTea.name ?
              <img className="tea-image" src={`./img/${baseTea.image}`} alt={baseTea.name}/>
            :
              <div className="empty empty-tea"></div>
          }
          {this.showSelectedFlavors(selectedFlavors)}
        </div>
        <div className="col-xs-8 flavor-col">{this.getFlavorCol(allFlavors)}</div>
      </div>
    )
  }
}