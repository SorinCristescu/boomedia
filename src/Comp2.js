import React, { Component } from 'react';
import './App.css';
import img_elMenu2 from './images/Comp2_elMenu2.png';


export default class Comp2 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_menu2 = {
        backgroundImage: 'url('+img_elMenu2+')',
        backgroundSize: '100% 100%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp2" style={baseStyle}>
        <div className="compContent">
          <div className='elMenu2' style={style_menu2} />
        </div>
      </div>
    )
  }
  

}
