import React, { Component } from 'react';
import './App.css';


export default class Comp5 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_textBlock2 = {
        fontSize: 60.2,
        color: '#d5d5d5',
        textAlign: 'left',
     };
    const style_textBlock2_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp5" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-PTMonoBold  elTextBlock2' style={style_textBlock2_outer}>
            <div style={style_textBlock2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.comp5_textblock2_288112.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
