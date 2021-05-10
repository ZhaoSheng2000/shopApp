import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

import Login from '../../components/login/index'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onClick(){
    Taro.navigateTo({
      url: '/pages/home/home'
    })
  }
  render () {
    return (
      <View className='index'>
        <Login/>
        <Button onClick={this.onClick}>测试跳转</Button>
      </View>
    )
  }
}
