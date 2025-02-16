import React, { Component } from 'react';

export default class ColorBox extends Component {

  checkOpacity = () => {
    if (this.props.opacity >=0.2){

        return <ColorBox opacity = {this.props.opacity - 0.1}/>

    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.checkOpacity()}
      </div>
    )
  }

}
