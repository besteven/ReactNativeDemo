import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Category from './src/components/Category/Category';
import Main from './src/components/Main/Main';

StatusBar.setHidden(true);

const AppShop = DrawerNavigator(
  {
    Main: { 
      screen: Main 
    },
    Category: { 
      screen: Category 
    }
  }
);

export default class App extends Component {
  render() {
    return <AppShop />;
  }
}
