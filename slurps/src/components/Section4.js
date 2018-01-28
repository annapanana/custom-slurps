import React, { Component } from 'react';

export default class Section4 extends Component {
  displayFlavors(flavors) {
    return flavors.map((flavor, key) => {
      return (
        <div key={key} className="flavor">
          {
            flavor.name ? 
              <img className={"flavor-img" + (key%2===1? " offset":"")} src={`./img/${flavor.image}`} alt={flavor.name}/>
            :
              <div className="empty"></div>
          }
        </div>
      )
    })
  }
  
  getText(selectedFlavors) {
    switch (selectedFlavors.length) {
      case 1:
        return `${selectedFlavors[0].name}`
      case 2:
        return `${selectedFlavors[0].name} & ${selectedFlavors[1].name}`
      case 3:
        return `${selectedFlavors[0].name}, ${selectedFlavors[1].name} & ${selectedFlavors[2].name}`
      default:
        return "nothing added"
    }
  }
  
  render() {
    const {selectedFlavors, baseTea, teaName, updateName} = this.props;
    return (
      <div className="row">
        <div className="tea col-xs-4">
          {this.displayFlavors(selectedFlavors)}
        </div>
        <div className="tea selected-tea col-xs-4">
          {
            baseTea.name ?
              <img className="tea-image" src={`./img/${baseTea.image}`} alt={baseTea.name}/>
            :
              <div className="empty empty-tea"></div>
          }
        </div>
        <div className="col-xs-4">
          <form>
            <input type="text" name="name" value={teaName} onChange={updateName}/>
            <br />
            <small>Click here to edit</small>
          </form>
          <h3>
            A {baseTea.name} tea blend with&nbsp;
            {this.getText(selectedFlavors, baseTea)}
          </h3>
        </div>
      </div>
    )
  }
}