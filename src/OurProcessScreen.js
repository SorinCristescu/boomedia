import React, { Component } from 'react';
import './App.css';
import Comp8 from './Comp8';
import img_elBoomediaLogoMobil from './images/StartScreen_elBoomediaLogoMobil_12684.png';
import img_elRoundimage from './images/StartScreen_elRoundimage_598469.png';


export default class OurProcessScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    
    const dataSheet_sheet1 = this.props.dataSheets['sheet1'];
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_textBlock = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock2 = {
        fontSize: 10.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_textBlock2_outer = {
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    
    const data_elComp = dataSheet_sheet1.items[0];
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
    
    return (
      <div className="AppScreen OurProcessScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-PTMonoBold  elTextBlock' style={style_textBlock_outer}>
            <div style={style_textBlock}>
              <div>{this.props.locStrings.ourprocess_textblock_67581}</div>
            </div>
          
          </div>
          
          <div className='font-PTMonoRegular  elTextBlock2' style={style_textBlock2_outer}>
            <div style={style_textBlock2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.ourprocess_textblock2_998169.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <div style={style_list}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols2_${index % 2}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Comp8 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
          </div>
          
          <div className='hasNestedComps elComp'>
            <div>
              <Comp8 {...data_elComp} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elBoomediaLogoMobil' style={style_boomediaLogoMobil} />
            <div className='elRoundimage' style={style_roundimage} onClick={this.onClick_elRoundimage}  />
          </div>
        </div>
      </div>
    )
  }
  

}
