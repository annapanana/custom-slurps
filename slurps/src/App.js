import React, { Component } from 'react';
import Section2 from "./components/Section2.js"
import Section3 from "./components/Section3.js"
import Section4 from "./components/Section4.js"
import Section5 from "./components/Section5.js"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.setBaseTea = this.setBaseTea.bind(this);
    this.setSelectedFlavors = this.setSelectedFlavors.bind(this);
    this.updateName = this.updateName.bind(this);
    this.showNextSection = this.showNextSection.bind(this);
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
      selectedFlavors: [],
      teaName: "Grizzly Juice",
      curStep: 1
    }
  }
  
  setBaseTea(tea) {
    this.setState({baseTea:tea})
  } 
  
  setSelectedFlavors(flavor) {
    let flavors = this.state.selectedFlavors;
    if (flavors.length < 3) {
      flavors.push(flavor);
      this.setState({selectedFlavors:flavors})
    } else {
      console.error("too many flavors!")
    }
  }
  
  updateName(event) {
    this.setState({teaName:event.target.value})
  }
  
  showNextSection(section, enabled, event) {
    if (enabled && section === this.state.curStep) {
      console.log("progress");
      this.setState({curStep: this.state.curStep + 1})
    }
  }
  
  render() {
    const {selectedFlavors, teaName, baseTea, curStep} = this.state;
    console.log("current step", curStep);
    return (
      <div className="app container">
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
            setBaseTea={this.setBaseTea}
            baseTea={baseTea}/>
            
          <div className="progress-section" onClick={this.showNextSection.bind(this, 1, baseTea.name?true:false)}>
            <img className="progress-arrow" src="/img/down-arrow.svg"/>
          </div>
          <div className="section-divider"></div>
          
          {
            curStep > 1 &&
              <div>
                <h2>Add Flavor</h2>
                <Section3 
                  baseTea={baseTea} 
                  allFlavors={this.flavors}
                  selectedFlavors={selectedFlavors}
                  setSelectedFlavors={this.setSelectedFlavors}/>
                  
                <div className="progress-section" onClick={this.showNextSection.bind(this, 2, selectedFlavors.length > 0 ?true:false)}>
                  <img className="progress-arrow" src="/img/down-arrow.svg"/>
                </div>
                <div className="section-divider"></div>
              </div>
              
          }
          
          {
            curStep > 2 &&
            <div>
              <h2>Name Your Tea</h2>
              <Section4 
                baseTea={baseTea}
                selectedFlavors={selectedFlavors}
                teaName={teaName}
                updateName={this.updateName}/>
                
              <div className="progress-section" onClick={this.showNextSection.bind(this, 3, teaName.length > 0?true:false)}>
                <img className="progress-arrow" src="/img/down-arrow.svg"/>
              </div>
              <div className="section-divider"></div>
            </div>
          }
          
          {
            curStep > 3 &&
            <div>
              <Section5 
                selectedFlavors={selectedFlavors}
                teaName={teaName}/>
              <div className="section-divider"></div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
