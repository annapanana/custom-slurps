import React, { Component } from 'react';

export default class TeaBag extends Component {
  constructor() {
    super();
    this.k = 0;
  }
  splitName(teaName) {
    return teaName.split(" ");
  }
  
  render() {
    const {teaName, selectedFlavors} = this.props,
          formattedName = teaName.includes(" ") ? this.splitName(teaName) : [teaName];

    return (
      <svg viewBox="0 0 648 818" key={this.k++}>
        <defs>
          <clipPath id="clip-path">
            <circle className="cls-1" cx="70.25" cy="378.25" r="31.75"/>
          </clipPath>
          <clipPath id="clip-path-2">
            <circle className="cls-1" cx="70.25" cy="462" r="31.75"/>
          </clipPath>
          <clipPath id="clip-path-3">
            <circle className="cls-1" cx="70.25" cy="545.74" r="31.75"/>
          </clipPath>
          {
            selectedFlavors[0] &&
              <image id="image-1" width="400" height="400" href={`/img/${selectedFlavors[0].image}`}/>
          }
          {
            selectedFlavors[1] &&
              <image id="image-2" width="400" height="400" href={`/img/${selectedFlavors[1].image}`}/>
          }
          {
            selectedFlavors[2] &&
              <image id="image-3" width="400" height="400" href={`/img/${selectedFlavors[2].image}`}/>
          }
          
        </defs>
        <title>tea_bag</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <image width="647" height="818" transform="translate(1)" href="img/bag.png"/>
            {
              formattedName.length === 1 ?
                <text className="bag-header" transform="translate(35.12 173.6)">
                  {formattedName[0]}
                </text>
              :
                <text className="bag-header" transform="translate(35.12 173.6)">
                  {formattedName[0]}
                  <tspan x="0" y="86.4">
                    {formattedName[1]}
                  </tspan>
                </text>
            }
            <text className="tea-desc" transform="translate(35.12 311.6)">A black tea blend with</text>
            {
              selectedFlavors[0] &&
                <text className="tea-desc" transform="translate(118.12 383.6)">{selectedFlavors[0].name}</text>
            }
            {
              selectedFlavors[1] &&
                <text className="tea-desc" transform="translate(118.12 466.6)">{selectedFlavors[1].name}</text>
            }
            {
              selectedFlavors[2] &&
                <text className="tea-desc" transform="translate(118.12 550.6)">{selectedFlavors[2].name}</text>
            }
            
            <text className="tea-footer" transform="translate(38.12 625.6)">Custom Slurps</text>
            <text className="tea-footer" transform="translate(38.12 650.6)">www.customslurps.com</text>
    
            <g className="flavor-circle-1">
              <use transform="translate(36.03 344.03) scale(0.17)" href="#image-1"/>
            </g>
            <g className="flavor-circle-2">
              <use transform="translate(36.03 427.78) scale(0.17)" href="#image-2"/>
            </g>
            <g className="flavor-circle-3">
              <use transform="translate(36.03 511.52) scale(0.17)" href="#image-3"/>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

