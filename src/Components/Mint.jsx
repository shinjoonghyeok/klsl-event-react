
import react, {Component, useEffect, useState} from 'react';
import video from '../assets/videos/main.mp4'
import headerIcon from '../assets/img/headerIcon.png'
import './mint.css'

function Mint() {
  return (
    <a>
        <div className='Header-Layout'>
          <span style={{float:'left',marginLeft:'3%'}}>
            <img src={headerIcon} style={{height:'80px'}}/>
          </span>
          <span style={{display: 'flex',marginRight:'3%',justifyContent:'right'}}>
            <button className='mint-btn' >
            </button>
          </span>
        </div>
        <div className='contentLayout'>
        

        </div>
      <div className='footerLayout' style={{paddingBottom:'5%'}}>
        
        <span style={{float:'left'}}>
          <div><font style={{color:'white'}}>Copyright 2022. Klay Slash <p/>All pictures cannot be copied without permission. </font></div>
        </span>
        <span style={{float:'right'}}>
          <div><font style={{color:'white'}}>Please CHECK URL<p/>Do not expose wallet address and private key.</font></div>
        </span>
      </div>
    </a>
  );
}
export default Mint;

