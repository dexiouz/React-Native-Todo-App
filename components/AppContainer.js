import React from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Likes from "./Likes";
import Todo from "./Todo";
import Flex from "./Flex";
import FlexDistribution from "./FlexDistribution";
import List from "./List";
import FlatlistExample from "./FlatListExample";
import Touchables from "./Touchbles";
import Menu from "./Menu";

const AppNavigator = createStackNavigator(
  {
    Likes: Likes,
    Todo: Todo,
    Flex: Flex,
    FlexDistribution: FlexDistribution,
    List: List,
    FlatlistExample: FlatlistExample,
    Touchables: Touchables,
    Menu
  },
  {
    initialRouteName: "Todo",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#222e50"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
