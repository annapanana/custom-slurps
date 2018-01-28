import React, { Component } from 'react';

export default class Section4 extends Component {
  
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
        <div className="col-xs-12 section-4">
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