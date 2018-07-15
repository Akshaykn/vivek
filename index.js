
import React, { Component } from 'react';
import { AppRegistry,View,StyleSheet,Text,ViewPagerAndroid,Image} from 'react-native';

export default class Bananas extends Component {
  

  render() {
    return (
      <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}>
      <View style={styles.pageStyle} key="1">
        <Text>First page</Text>
      </View>
      <View style={styles.pageStyle} key="2">
        <Text>Second page</Text>
      </View>
      <View style={styles.pageStyle} key="3">
        <Text>Third page</Text>
      </View>
      <View style={styles.pageStyle} key="4">
        <Text>Fourth page</Text>
      </View>
    </ViewPagerAndroid>
     
    );
  }
}
   styles =  StyleSheet.create({
     
    container:{
      paddingTop: 60,
      alignItems: 'center'
    },
    buttoncontainer:{
      margin:20
    },
    button: {
      marginBottom: 30,
      width: 200,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      margin:40
    },
    buttonText: {
      padding: 20,
      color: 'white'
    },
    viewPager: {
      flex: 1
    },
    pageStyle: {
      alignItems: 'center',
      padding: 20,
    }
    
   })
   
  


  



AppRegistry.registerComponent('vivek', () => Bananas);
