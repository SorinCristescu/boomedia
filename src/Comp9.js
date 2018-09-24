import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Comp9_elImage_399578.jpg';


export default class Comp9 extends Component {

  // Properties used by this component:
  // image

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_image = {
        height: 'auto',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp9" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elImage' style={style_image_outer}>
            <img style={style_image} src={(this.props.image || img_elImage)} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
