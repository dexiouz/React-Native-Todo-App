import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppContainer from "./components/AppContainer";
import Likes from "./components/Likes";
import Todo from "./components/Todo";
import Flex from "./components/Flex";
import FlexDistribution from "./components/FlexDistribution";
import List from "./components/List";
import FlatlistExample from "./components/FlatListExample";
import Touchables from "./components/Touchbles";
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17859b"
  }
});
