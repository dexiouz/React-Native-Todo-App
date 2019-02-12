import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const FlexDistribution = (props) => {
   return (
     <View style={styles.mainView}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
     </View>
  );
}
export default FlexDistribution;


const styles = StyleSheet.create({
  mainView:{
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    width: 90,
    height: 90,
    backgroundColor: '#fff'
  },
  box2: {
    width: 90,
    height: 90,
    backgroundColor: '#e9d985'
  },
  box3: {
    width: 90,
    height: 90, 
    backgroundColor: '#222e50'
  }
});
