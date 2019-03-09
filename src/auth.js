import React from 'react'
import {Route, Redirect} from "react-router-dom"

class AuthCheck extends React.Component {
  render() {
    const {component: Component, path} = this.props
    // 验证登录情况: 如果isLogin是true,证明登陆过，否则没有登录（跳转到登录页）
    let isLogin = sessionStorage.getItem('mytoken')?true:false
    return (
      <Route path={path} render={() => {
        let info = <Component/>
        if(!isLogin) {
          // 没有登陆，跳转到登录页，Redireact组件用于重定向
          info = <Redirect to='/' />
        }
        // 这里的返回值就是路由对应的组件信息
        return info
      }} />
    )
  }
}

export default AuthCheck