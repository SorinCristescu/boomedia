import React, { Component } from 'react';
import './App.css';
import btn_icon_33103 from './images/btn_icon_33103.png';
import img_elBoomediaLogoMobil from './images/StartScreen_elBoomediaLogoMobil_12684.png';
import img_elRoundimage from './images/StartScreen_elRoundimage_598469.png';


export default class WorksScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elIconButton = (ev) => {
    // Go to screen 'Menu'
    this.props.appActions.goToScreen('menu', { transitionId: 'fadeIn' });
  
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
    const style_iconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_33103+')',
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
        pointerEvents: 'none',
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
      <div className="AppScreen WorksScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elIconButton' style={style_iconButton}  onClick={this.onClick_elIconButton}  />
            <div className='elBoomediaLogoMobil' style={style_boomediaLogoMobil} />
            <div className='elRoundimage' style={style_roundimage} onClick={this.onClick_elRoundimage}  />
            <div className='headlineFont elTextBlock' style={style_textBlock}>
              <div>{this.props.locStrings.works_textblock_101710}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
