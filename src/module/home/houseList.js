import React from 'react'
import {Icon, Item} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {baseURL} from '../../common'

class HouseList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }

  componentDidMount = async () => {
    let param = this.props.location.state.query
    // 完成数据列表的加载
    let ret = await axios.post('homes/list',{home_type: param.type})
    // 更新列表数据
    this.setState({
      listData: ret.data
    })
  }
  
  // 回退按钮的点击事件
  handle = () => {
    // 这里应该跳转到原来的位置：主页
    this.props.history.goBack();
  }

  render() {
    // 通过location.state可以获取编程式路由push方法传递过来的数据
    let param = this.props.location.state.query
    // 每条列表信息
    let listItem = this.state.listData.map(item => {
      return (
        <Item key={item.id}>
          <Item.Image src={baseURL+'public/home.png'}/>
          <Item.Content>
            <Item.Header>{item.home_name}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{item.home_desc}</span>
            </Item.Meta>
            <Item.Description>
              {item.home_tags}
            </Item.Description>
            <Item.Description>{item.home_price}</Item.Description>
          </Item.Content>
        </Item>
      )
    })
    return (
      <div className='house-list'>
        <div className='house-list-title'>
          <Icon onClick={this.handle} name='angle left' size='large'/>
          {param.mname}
        </div>
        <div className="house-list-content">
          <Item.Group divided unstackable>
            {listItem}
          </Item.Group>
        </div>
      </div>
    )
  }
}

export default withRouter(HouseList)