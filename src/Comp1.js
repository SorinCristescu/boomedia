import React, { Component } from 'react';
import './App.css';
import Comp3 from './Comp3';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_textBlock = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock2 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock2_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock3 = {
        fontSize: 12.9,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock3_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='font-IBMPlexMono  elTextBlock' style={style_textBlock_outer}>
            <div style={style_textBlock}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.comp1_textblock_274564.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='font-IBMPlexMono  elTextBlock2' style={style_textBlock2_outer}>
            <div style={style_textBlock2}>
              <div>{this.props.locStrings.comp1_textblock2_40503}</div>
            </div>
          
          </div>
          
          <div className='font-IBMPlexMono  elTextBlock3' style={style_textBlock3_outer}>
            <div style={style_textBlock3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.comp1_textblock3_825269.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elComp'>
            <div>
              <Comp3 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
