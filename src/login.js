import React from 'react'
import axios from 'axios'
// 导入需要的UI组件
import {Button, Icon, Form, Divider} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
// 导入样式
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  // 操作用户名
  handleUsername = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }
  // 操作密码
  handlePassword = (event) => {
    this.setState(
      {
        password: event.target.value
      }
    )
  }
  // 点击按钮，提交
  submit = async () => {
    // 获取表单数据
    // 调用接口进行身份验证  http://47.96.21.88:8086/users/login
    // 服务器返回一个状态：如果登陆成功会反hi一个状态token
    // 保存token信息到sessionStorage
    // 登陆成功跳转到主页面
    let ret = await axios.post('http://47.96.21.88:8086/users/login', {
      uname: this.state.username,
      pwd: this.state.password
    });
    // console.log(ret)
    sessionStorage.setItem('mytoken',ret.data.token)
    // 跳到主页面
    let {history} = this.props
    history.push('/home')
  }

  render () {
    return (
      <div className='login-container'>
        <div className='login-logo'>
          <Icon name='home' color='orange' size='massive' />
        </div>
        <div className="login-form">
          <Form>
            <Form.Input
              icon='user secret'
              required
              size='big'
              iconPosition='left'
              name='username'
              value={this.state.username}
              onChange={this.handleUsername}
              placeholder='请输入用户名...'
            />
            <Form.Input
              icon='lock'
              required
              size='big'
              iconPosition='left'
              name='password'
              value={this.state.password}
              onChange={this.handlePassword}
              placeholder='请输入密码...'
              type='password'
            />
            <Button onClick={this.submit} fluid color='green'>登录</Button>
          </Form>
          <Divider horizontal>---   ---</Divider>
          <div className="login-third">
            <Icon name="weixin" color="grey" size="big"/>
            <Icon name="qq" color="grey" size="big"/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)