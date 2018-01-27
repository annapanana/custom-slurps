import React, { Component } from 'react';

export default class Section2 extends Component {
  
  getTeaCol(teas) {
    return teas.map((tea, key) => {
      return (
        <div key={key} className="tea" onClick={this.props.setBaseTea.bind(this, tea)}>
          <img className="tea-image" src={`./img/${tea.image}`} alt={tea.name}/>
          <h3>{tea.name}</h3>
        </div>
      )
    })
  }
  
  render() {
    const {teas} = this.props;
    return  (
      <div className="sub-section section-2">
        {this.getTeaCol(teas)}
      </div>
    )
  }
}
