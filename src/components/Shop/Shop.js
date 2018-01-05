import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CategoryLanding from './CategoryLanding';
import Category from './Category';
import Product from './Product';

const Main = StackNavigator({
  CategoryLanding: {
    screen: CategoryLanding,
    navigationOptions: {
      title: 'Category Landing',
    },
  },
  Category: {
    screen: Category,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  Product: {
    screen: Product,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
    }),
  }
});

export default class Shop extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main />
      </View>
    );
  }
}
