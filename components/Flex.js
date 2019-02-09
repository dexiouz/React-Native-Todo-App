import React, { Component } from 'react';
import { View, Text } from 'react-native';
const Flex = (props) => {
   return (
     <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#007991'}}></View>
      <View style={{flex: 2, backgroundColor: '#439a86'}}></View>
      <View style={{flex: 3, backgroundColor: '#e9d985'}}></View>
      <View style={{flex: 6, backgroundColor: '#222e50'}}></View>
     </View>
  );
}
export default Flex;