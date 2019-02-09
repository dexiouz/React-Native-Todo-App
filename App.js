import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './components/Todo';
import Flex from './components/Flex';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Todo /> */}
        <Flex />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',//'#e4e4d9',
  },
});
