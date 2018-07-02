import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }
  changeColors = (event) => {
    const colorState = getRandomColor()
    if (event.target.className === "tier1"){
      this.setState({
        color: colorState,
        childColor: getReducedColor(colorState)
      });
    }
    else if (event.target.className === "tier2"){
      this.setState({
        childColor: colorState
      });
    }
    else if (event.target.className === "tier3"){
      return colorState
    }
  }
  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.changeColors} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 changeColors={this.changeColors} color={this.state.childColor} />
        <Tier2 changeColors={this.changeColors} color={this.state.childColor} />
      </div>
    )
  }
}
