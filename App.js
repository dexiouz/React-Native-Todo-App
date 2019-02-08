import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './components/PresentationalComponent';
import Likes from './components/Likes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <PresentationalComponent title="Presentational-state-prop"/>
        <Likes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
