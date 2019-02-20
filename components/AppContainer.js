import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Likes from './Likes';
import Todo from './Todo';
import Flex from './Flex';
import FlexDistribution from './FlexDistribution';
import List from './List';
import FlatlistExample from './FlatListExample';
import Touchables from './Touchbles';

const AppNavigator = createStackNavigator(
  {
    Likes: Likes,
    Todo: Todo,
    Flex: Flex,
    FlexDistribution: FlexDistribution,
    List: List,
    FlatlistExample: FlatlistExample,
    Touchables: Touchables
  },
  {
    initialRouteName: "Touchables"
  }
)

AppContainer = createAppContainer( AppNavigator );

export default AppContainer



