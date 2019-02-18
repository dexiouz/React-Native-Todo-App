import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Todo from './components/Todo';
import Flex from './components/Flex';
import FlexDistribution from './components/FlexDistribution';
import List from './components/List';
import FlatlistExample from './components/FlatListExample';
import Touchables from './components/Touchbles';

export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#17859b' //'#007991' //'powderblue',//'#e4e4d9',
  },
});
