import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Todo extends React.Component {
  render() {
    return (
      //container View
      <View style = {styles.container}>
        {/* Header View */}
        <View>
          <Text style = {styles.headerText}> Todo App </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 34,
    fontWeight: '900'
  }
});
