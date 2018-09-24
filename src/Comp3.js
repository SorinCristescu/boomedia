import React, { Component } from 'react';
import './App.css';


export default class Comp3 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_button = {
        display: 'block',
        fontSize: 17.2,
        fontFamily: "'IBMPlexMono', sans-serif",
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        backgroundColor: 'transparent',
     };
    const style_button_outer = {
        pointerEvents: 'none',
     };
    const style_rectangle = {
        background: 'rgba(0, 0, 0, 1.000)',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp3" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elButton' style={style_button_outer}>
            <button style={style_button}  >
              {this.props.locStrings.comp3_button_416112}
            </button>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elRectangle' style={style_rectangle} />
        </div>
      </div>
    )
  }
  

}
