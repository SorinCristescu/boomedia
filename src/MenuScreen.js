import React, { Component } from 'react';
import './App.css';
import btn_icon_731860 from './images/btn_icon_731860.png';
import img_elBoomediaLogoMobil from './images/StartScreen_elBoomediaLogoMobil_12684.png';
import img_elRoundimageCopy from './images/MenuScreen_elRoundimageCopy_957000.png';


export default class MenuScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elIconButton = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  onClick_elText = (ev) => {
    // Go to screen 'About'
    this.props.appActions.goToScreen('about', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elText2 = (ev) => {
    // Go to screen 'Our process'
    this.props.appActions.goToScreen('ourprocess', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elText3 = (ev) => {
    // Go to screen 'Works'
    this.props.appActions.goToScreen('works', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elText4 = (ev) => {
    // Go to screen 'Let's talk'
    this.props.appActions.goToScreen('letstalk', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elText5 = (ev) => {
    // Go to screen 'Contact'
    this.props.appActions.goToScreen('contact', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elRoundimageCopy = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
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
    const style_iconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_731860+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '55.209%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
     };
    const style_iconButton_outer = {
        cursor: 'pointer',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        cursor: 'pointer',
     };
    const style_text2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text2_outer = {
        cursor: 'pointer',
     };
    const style_text3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text3_outer = {
        cursor: 'pointer',
     };
    const style_text4 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text4_outer = {
        cursor: 'pointer',
     };
    const style_text5 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text5_outer = {
        cursor: 'pointer',
     };
    const style_boomediaLogoMobil = {
        backgroundImage: 'url('+img_elBoomediaLogoMobil+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_roundimageCopy = {
        backgroundImage: 'url('+img_elRoundimageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen MenuScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elIconButton' style={style_iconButton_outer}>
            <button style={style_iconButton}  onClick={this.onClick_elIconButton}  />
          
          </div>
          
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text} onClick={this.onClick_elText} >
              <div>{this.props.locStrings.screen2_text_409599}</div>
            </div>
          
          </div>
          
          <div className='headlineFont elText2' style={style_text2_outer}>
            <div style={style_text2} onClick={this.onClick_elText2} >
              <div>{this.props.locStrings.screen2_text2_570696}</div>
            </div>
          
          </div>
          
          <div className='headlineFont elText3' style={style_text3_outer}>
            <div style={style_text3} onClick={this.onClick_elText3} >
              <div>{this.props.locStrings.screen2_text3_173581}</div>
            </div>
          
          </div>
          
          <div className='headlineFont elText4' style={style_text4_outer}>
            <div style={style_text4} onClick={this.onClick_elText4} >
              <div>{this.props.locStrings.screen2_text4_410720}</div>
            </div>
          
          </div>
          
          <div className='headlineFont elText5' style={style_text5_outer}>
            <div style={style_text5} onClick={this.onClick_elText5} >
              <div>{this.props.locStrings.screen2_text5_668799}</div>
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elBoomediaLogoMobil' style={style_boomediaLogoMobil} />
            <div className='elRoundimageCopy' style={style_roundimageCopy} onClick={this.onClick_elRoundimageCopy}  />
          </div>
        </div>
      </div>
    )
  }
  

}
