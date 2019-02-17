/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Image} from 'react-native';
import { Button } from 'antd-mobile';

// 添加按钮
add=()=>{
  var url = 'http://47.105.162.113:9001'+'/xiaocar/mobile/addMobile?m1=60';
  fetch(url).then((response)=>response.text())//.json())
            .then(
                (response)=> {
                  alert(response);
                }
            ).catch((error)=>console.error(error))
}
// 查询按钮
query=()=>{
  var url = 'http://47.105.162.113:9001'+'/xiaocar/mobile/queryMobile?pk=12';
  fetch(url).then((response)=>response.text())//.json())
            .then(
                (response)=> {
                    alert(response);
                }
            ).catch((error)=>console.error(error))
}

type Props = {};
// 页面主题
export default class App extends Component<Props> {
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Button>Start</Button>;
        <MyButton title='add' />
        <Text style={styles.welcome}>LED</Text>
        <Blink text='I love to blink' />
        <Image source={pic} style={{width: 193, height: 110}} />
        <MyButton title='query' />
      </View>
    );
  }
}
// 自定义button组件
class MyButton extends Component{
  render(){
    return(


      <View style={styles.container}>
        <Button onPress={()=>{this.props.title()}}
          title={this.props.title}
        />
      </View>
    );
  }
}

// 定时器显示组件
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

// 样式表
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login:{
    fontSize:26,
    margin:20,
    textAlign:'center',
    color:'#fff',
    // backgroundColor:'#333',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
