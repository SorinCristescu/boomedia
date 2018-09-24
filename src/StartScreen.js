import React, { Component } from 'react';
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import img_elBoomediaLogoMobil from './images/StartScreen_elBoomediaLogoMobil_12684.png';
import img_elRoundimage from './images/StartScreen_elRoundimage_598469.png';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elBoomediaLogoMobil = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elRoundimage = (ev) => {
    // Go to screen 'Menu'
    this.props.appActions.goToScreen('menu', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_columns = {
        height: 'auto',  // This element is in scroll flow
     };
    const style_textBlock = {
        fontSize: 23.7,
        color: '#d5d5d5',
        textAlign: 'left',
     };
    const style_textBlock_outer = {
        pointerEvents: 'none',
     };
    const style_rectangle = {
        background: 'rgba(213, 213, 213, 1.000)',
        border: '0.5px solid rgba(213, 213, 213, 0.4501)',
     };
    const style_rectangle_outer = {
        pointerEvents: 'none',
     };
    const style_boomediaLogoMobil = {
        backgroundImage: 'url('+img_elBoomediaLogoMobil+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        cursor: 'pointer',
     };
    const style_roundimage = {
        backgroundImage: 'url('+img_elRoundimage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elColumns'>
            <div style={style_columns}>
              <div className="col0">
                <Comp1 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <Comp2 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          
          </div>
          
          <div className='font-PTMonoRegular  elTextBlock' style={style_textBlock_outer}>
            <div style={style_textBlock}>
              <div>{this.props.locStrings.about_textblock_918202}</div>
            </div>
          
          </div>
          
          <div className='elRectangle' style={style_rectangle_outer}>
            <div style={style_rectangle} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elBoomediaLogoMobil' style={style_boomediaLogoMobil} onClick={this.onClick_elBoomediaLogoMobil}  />
            <div className='elRoundimage' style={style_roundimage} onClick={this.onClick_elRoundimage}  />
          </div>
        </div>
      </div>
    )
  }
  

}
