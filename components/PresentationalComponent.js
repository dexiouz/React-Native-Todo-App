import React, { Component } from 'react';
import { View, Text } from 'react-native';
//presentationlState
const PresentationalComponent = (props) => {
   return (
     <View>
      <Text>This is coming from a stateless component</Text>
      <Text>This is prop: { props.title } is from App.js</Text>
     </View>
  );
}
export default PresentationalComponent;
