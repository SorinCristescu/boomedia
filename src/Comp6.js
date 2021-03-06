import React, { Component } from 'react';
import './App.css';


export default class Comp6 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_textBlock3 = {
        fontSize: 10.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock3_outer = {
        pointerEvents: 'none',
     };
    const style_textBlockCopy = {
        fontSize: 10.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlockCopy_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp6" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-PTMonoRegular  elTextBlock3' style={style_textBlock3_outer}>
            <div style={style_textBlock3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.comp6_textblock3_993710.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='font-PTMonoRegular  elTextBlockCopy' style={style_textBlockCopy_outer}>
            <div style={style_textBlockCopy}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.comp6_textblockcopy_370292.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
