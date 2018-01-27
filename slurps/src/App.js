import React, { Component } from 'react';
import Section2 from "./components/Section2.js"
import Section3 from "./components/Section3.js"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.setBaseTea = this.setBaseTea.bind(this);
    this.setSelectedFlavors = this.setSelectedFlavors.bind(this);
    
    this.teas = [
      {name:"Black", image:"black_tea.png"},
      {name:"Green", image:"green_tea.png"},
      {name:"Red", image:"red_tea.png"}
    ]
    
    this.flavors = [
      {name:"Aleppo Chili", image:"aleppo_chili.png"},
      {name:"Blueberry", image:"blueberry.png"},
      {name:"Cinnamon", image:"cinnamon.png"},
      {name:"Cloves", image:"cloves.png"},
      {name:"Ginger", image:"ginger.png"},
      {name:"Lavendar", image:"lavendar.png"},
      {name:"Lemon Peel", image:"lemon.png"},
      {name:"Peppermint", image:"peppermint.png"},
      {name:"Pink Peppercorn", image:"peppercorn.png"}
    ]
    
    this.state = {
      baseTea: {},
      selectedFlavors: []
    }
  }
  
  setBaseTea(tea) {
    console.log(tea);
    this.setState({baseTea:tea})
  } 
  
  setSelectedFlavors(flavor) {
    let flavors = this.state.selectedFlavors;
    console.log(flavors);
    if (flavors.length < 3) {
      flavors.push(flavor);
      this.setState({selectedFlavors:flavors})
    } else {
      console.error("too many flavors!")
    }
  }
  
  render() {
    const {baseTea, selectedFlavors} = this.state;
    return (
      <div className="app">
        <div className="page-wrapper">
          <div className="section section-1">
            <div className="header-text">
              <h1>Custom Slurps</h1>
            </div>
          </div>
          <div className="section-divider"></div>
          <h2>Pick One Tea</h2>
          <Section2 
            teas={this.teas}
            setBaseTea={this.setBaseTea}/>
          <div className="section-divider"></div>
          <h2>Add Flavor</h2>
          <Section3 
            baseTea={baseTea} 
            allFlavors={this.flavors}
            selectedFlavors={selectedFlavors}
            setSelectedFlavors={this.setSelectedFlavors}
            />
          <div className="section-divider"></div>
          <h2>Name Tea</h2>
        </div>
      </div>
    );
  }
}

export default App;
