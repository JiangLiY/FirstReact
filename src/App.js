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
