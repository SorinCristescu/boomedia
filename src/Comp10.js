import React, { Component } from 'react';
import './App.css';


export default class Comp10 extends Component {

  // Properties used by this component:
  // text, title, number

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_textBlock3 = {
        fontSize: 6.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textBlock3 = this.props.number;
    
    const style_textBlock3_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock4 = {
        fontSize: 6.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock4_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock5 = {
        fontSize: 17.2,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textBlock5 = this.props.title;
    
    const style_textBlock5_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock = {
        fontSize: 10.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const value_textBlock = this.props.text;
    
    
    return (
      <div className="Comp10" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-PTMonoRegular  elTextBlock3' style={style_textBlock3_outer}>
            <div style={style_textBlock3}>
              <div>{value_textBlock3 !== undefined ? value_textBlock3 : (<span className="propValueMissing">{this.props.locStrings.comp10_textblock3_289218}</span>)}</div>
            </div>
          
          </div>
          
          <div className='font-PTMonoRegular  elTextBlock4' style={style_textBlock4_outer}>
            <div style={style_textBlock4}>
              <div>{this.props.locStrings.comp10_textblock4_299121}</div>
            </div>
          
          </div>
          
          <div className='font-PTMonoBold  elTextBlock5' style={style_textBlock5_outer}>
            <div style={style_textBlock5}>
              <div>{value_textBlock5 !== undefined ? value_textBlock5 : (<span className="propValueMissing">{this.props.locStrings.comp10_textblock5_50037}</span>)}</div>
            </div>
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='font-PTMonoRegular  elTextBlock' style={style_textBlock}>
            <div>{value_textBlock !== undefined ? value_textBlock : (<span className="propValueMissing">{this.props.locStrings.comp10_textblock_1026243}</span>)}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
