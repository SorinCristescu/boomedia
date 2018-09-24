import React, { Component } from 'react';
import './App.css';
import Comp5 from './Comp5';
import Comp4 from './Comp4';
import Comp7 from './Comp7';
import Comp6 from './Comp6';
import img_elBoomediaLogoMobil from './images/StartScreen_elBoomediaLogoMobil_12684.png';
import img_elRoundimage from './images/StartScreen_elRoundimage_598469.png';


export default class AboutScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    const style_columns = {
        height: 'auto',  // This element is in scroll flow
     };
    const style_columns2 = {
        height: 'auto',  // This element is in scroll flow
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
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen AboutScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elColumns'>
            <div style={style_columns}>
              <div className="col0">
                <Comp5 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <Comp4 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elColumns2'>
            <div style={style_columns2}>
              <div className="col0">
                <Comp7 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <Comp6 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elBoomediaLogoMobil' style={style_boomediaLogoMobil} onClick={this.onClick_elBoomediaLogoMobil}  />
            <div className='elRoundimage' style={style_roundimage} onClick={this.onClick_elRoundimage}  />
            <div className='font-PTMonoBold  elTextBlock' style={style_textBlock}>
              <div>{this.props.locStrings.about_textblock_314635}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
