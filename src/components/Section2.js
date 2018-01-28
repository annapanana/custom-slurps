import React, { Component } from 'react';

export default class Section2 extends Component {
  
  getTeaCol(teas, selectedTea) {
    return teas.map((tea, key) => {
      return (
        <div key={key} className="tea col-xs-4" onClick={this.props.setBaseTea.bind(this, tea)}>
          <img className={"tea-image" + (selectedTea === tea.name ? " tea-selection":"")} src={`./img/${tea.image}`} alt={tea.name}/>
          <h3>{tea.name}</h3>
        </div>
      )
    })
  }
  
  render() {
    const {teas, baseTea} = this.props;
    return  (
      <div className="row">
        {this.getTeaCol(teas, baseTea.name)}
      </div>
    )
  }
}
