import React from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Button } from '@tarojs/components'


export default class Home extends React.Component {
    state = {}
    onClick() {
        Taro.navigateTo({
            url: '/pages/index/index'
        })
    }
    render() {
        return (
            <View className="index">
                home
                <Button onClick={this.onClick}>测试跳转</Button>

            </View>

        )
    }
}