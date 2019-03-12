import React, { Component } from 'react';
import './App.css';
// 导入组件库的样式
import 'semantic-ui-css/semantic.min.css'
// 导入外界字体图标的样式
import './assets/fonts/iconfont.css'
// 导入相关路由配置组件
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// 导入验证是否已登录的组件
import AuthCheck from './auth'
import Login from './login';
import Main from './module/main';

// 导入公共组件
import {baseURL} from './common'
// 导入axios 
import axios from 'axios'
// 配置axios的基准路径
axios.defaults.baseURL = baseURL

//axios请求拦截器统一处理接口的token
axios.interceptors.request.use(function (config) {
  if(!config.url.endsWith('/')) {
    config.headers.Authorization = sessionStorage.getItem('mytoken')
  }
  return config
},function(error) {
  return Promise.reject(error)
})
// axios响应拦截器
axios.interceptors.response.use(function (response) {
  // response是axios包装之后的数据
  return response.data
},function(error) {
  return Promise.reject(error)
})
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <AuthCheck path="/home" component={Main} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
