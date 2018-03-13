import React, {Component} from 'react'
import {NavBar,WingBlank,List, InputItem, WhiteSpace, Button}from 'antd-mobile'
import Logo from '../../compones/logo/logo'

export default class Login extends React.Component{
  state={
    name:"",
    pwd:'',
}
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }

  // 跳转到注册路由
  toRegister = () => {
    this.props.history.replace('/register')
  }

  // 注册
  login = () => {
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <NavBar type='primary'>硅 谷 直 聘</NavBar>
        <Logo />
          <WingBlank>
            <list>
              <InputItem placeholder='请输入' onChange={val=>this.handleChange('name', val)}>用户名:</InputItem>
              <WhiteSpace/>
              <InputItem type='password' >请输入密码:</InputItem>
              <WhiteSpace/>
              <Button type='primary' onClick={this.login}>登录</Button>
              <WhiteSpace/>
              <Button type='primary' onClick={this.toRegister}>已有账号</Button>
            </list>
          </WingBlank>

      </div>
    )
  }
}