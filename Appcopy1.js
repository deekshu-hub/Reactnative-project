import React, { Component } from 'react';
import { StyleSheet,View, Image, Text} from 'react-native';
import logo from './assets/logo.png';

export default class Flexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}><Text>1</Text></View>
        <View style={styles.test}><Text>5</Text></View>
        <View style={styles.image}><Image source={logo} style={{ width: 100, height: 100 }} /></View>
      </View>
    );
  }
};
const styles=StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    text:{
        width: 100,
         height: 100, 
         backgroundColor: 'blue'
    },
    test:{
        width: 100,
         height: 100, 
         backgroundColor: 'pink'

    },
    image:{
        width: 100,
         height: 100, 
         backgroundColor: 'steelblue'
    }
});