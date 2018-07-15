
import React, { Component } from 'react';
import { AppRegistry,View,Text,FlatList,StyleSheet } from 'react-native';
export default class Bananas extends Component {
  render() {
    return (
      <View style={styles.container}>
           <FlatList
             data = {[
                            {key : 'Akshay'},
                            {key : 'Mani'},
                            {key : 'Naveen'},
                            {key : 'Gautam'},
                            {key : 'Alok'},
                            {key : 'Sachin'},
                            {key : 'Akshay'},
                            {key : 'Mani'},
                            {key : 'Naveen'},
                            {key : 'Gautam'},
                            {key : 'Alok'},
                            {key : 'Sachin'},
                            {key : 'Akshay'},
                            {key : 'Mani'},
                            {key : 'Naveen'},
                            {key : 'Gautam'},
                            {key : 'Alok'},
                            {key : 'Sachin'}
                     ]}

             renderItem = {  ({ item }) => < Text style = { styles.item }>   { item.key } </Text>    }
           />
      </View>
    );
  }
}
   styles =  StyleSheet.create({
    container : {
      flex:       1,
      paddingTop: 22
                },
    item :      {
      padding:  10,
      fontSize: 20,
      height:   44,
      color:    'black'
                }
   })
AppRegistry.registerComponent('vivek', () => Bananas);
