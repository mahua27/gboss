import React, {Component} from 'react'
import {NavBar,WingBlank,List, InputItem, WhiteSpace, Button,Radio}from 'antd-mobile'
import Logo from '../../compones/logo/logo'
const  RadioItem = Radio.RadioItem;

export default class Register extends React.Component{
  state={
    name:"",
    pwd:'',
    pwd2:'',
    type: 'boss',
  }
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }

  // 跳转到Login路由
  toLogin = () => {
    this.props.history.replace('/login')
  }

  // 注册
  register = () => {
    console.log(JSON.stringify(this.state))
  }

  render(){
    return(
      <div>
        <NavBar type='primary'>硅 谷 直 聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem placeholder='请输入' onChange={val=>this.handleChange('name', val)}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' onChange={val => this.handleChange('pwd', val) }>请输入密码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' onChange={val => this.handleChange('pwd', val) }>确认密码:</InputItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注册</Button>
            <WhiteSpace/>
            <Button type='primary' onClick={this.toLogin}>已有账号</Button>
          </List>
        </WingBlank>

      </div>
    )
  }
}