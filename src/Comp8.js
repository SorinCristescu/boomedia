import React, { Component } from 'react';
import './App.css';
import Comp9 from './Comp9';
import Comp10 from './Comp10';


export default class Comp8 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const dataSheet_sheet1 = this.props.appActions.getDataSheet('sheet1');
    const style_rectangle = {
        background: 'rgba(121, 121, 121, 1.000)',
     };
    const style_rectangle_outer = {
        pointerEvents: 'none',
     };
    const style_columns = {
        height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="Comp8" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elRectangle' style={style_rectangle_outer}>
            <div style={style_rectangle} />
          
          </div>
          
          <div className='hasNestedComps elColumns'>
            <div style={style_columns}>
              <div className="col0">
                <Comp9 image={this.props.image} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <Comp10 text={this.props.text} title={this.props.title} number={this.props.number} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
