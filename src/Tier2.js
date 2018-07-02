import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }
 
  
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.color !== this.props.color){
      this.setState({
        childColor: getReducedColor(nextProps.color)
      });
    }
  }
  handleChildClick = (event) => {
    if (event.target.className === "tier3"){
      const newColor = this.props.changeColors(event)
      this.setState({
        childColor: newColor
      });
    }
  }
  

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.props.changeColors}  className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleChildClick={this.handleChildClick} color={this.state.childColor} />
        <Tier3 handleChildClick={this.handleChildClick} color={this.state.childColor} />
      </div>
    )
  }
}
