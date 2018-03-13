//显示logo的ui组件
import React from 'react';
import Imglogo from './job.png'
import './logo.less'



export default class Logo extends React.Component{
  render(){
    return(
      <div className='logo-conter'>
        <img src={Imglogo} alt="logo"/>
      </div>
    )
  }
}