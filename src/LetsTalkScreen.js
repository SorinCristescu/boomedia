import React, { Component } from 'react';
import './App.css';
import btn_icon_873930 from './images/btn_icon_873930.png';
import img_elBoomediaLogoMobil from './images/StartScreen_elBoomediaLogoMobil_12684.png';
import img_elRoundimage from './images/StartScreen_elRoundimage_598469.png';


export default class LetsTalkScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'Get a quote'
    this.props.appActions.goToScreen('getaquote', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy = (ev) => {
    // Go to screen 'Free consultation day'
    this.props.appActions.goToScreen('freeconsultationday', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elIconButton = (ev) => {
    // Go to screen 'Menu'
    this.props.appActions.goToScreen('menu', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elBoomediaLogoMobil = (ev) => {
    // Go to screen 'Start'
    this.props.appActions.goToScreen('start', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elRoundimage = (ev) => {
    // Go to screen 'Menu'
    this.props.appActions.goToScreen('menu', { transitionId: 'fadeIn' });
  
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
    const style_button = {
        display: 'block',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        backgroundColor: 'transparent',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    const style_buttonCopy = {
        display: 'block',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        backgroundColor: 'transparent',
     };
    const style_buttonCopy_outer = {
        cursor: 'pointer',
     };
    const style_iconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_873930+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.562%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        cursor: 'pointer',
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
    const style_textBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen LetsTalkScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton' style={style_button_outer}>
            <button style={style_button}  onClick={this.onClick_elButton} >
              {this.props.locStrings.letstalk_button_123729}
            </button>
          
          </div>
          
          <div className='actionFont elButtonCopy' style={style_buttonCopy_outer}>
            <button style={style_buttonCopy}  onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.letstalk_button_621786}
            </button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elIconButton' style={style_iconButton}  onClick={this.onClick_elIconButton}  />
            <div className='elBoomediaLogoMobil' style={style_boomediaLogoMobil} onClick={this.onClick_elBoomediaLogoMobil}  />
            <div className='elRoundimage' style={style_roundimage} onClick={this.onClick_elRoundimage}  />
            <div className='headlineFont elTextBlock' style={style_textBlock}>
              <div>{this.props.locStrings.letstalk_textblock_235694}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
