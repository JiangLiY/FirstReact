import React from 'react'
import {Icon} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class MyMap extends React.Component {
  // 设置回退按钮的点击事件
  handle = () => {
    // 退回之前的状态：主页
    let {history} = this.props
    history.goBack();
  }

  initMap = () => {
    // 初始化地图（在React中全局对象要通过window来访问）
    let BMap = window.BMap;
    // 创建Map实例
    let map = new BMap.Map('allmap')
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
      mapTypes:[
              window.BMAP_NORMAL_MAP,
              window.BMAP_HYBRID_MAP
          ]}));	  
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }

  componentDidMount() {
    this.initMap()
  }

  render() {
    return (
      <div className='map-house'>
        <div className="map-house-title">
          <Icon onClick={this.handle} name='angle left' size='large' />地图找房
        </div>
        <div className='map-house-content' id="allmap">
        </div>
      </div>
    )
  }
  
}

export default withRouter(MyMap)