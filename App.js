import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Shop from './src/components/Shop/Shop';
import Cart from './src/components/Cart/Cart';
import Search from './src/components/Search/Search';
import Setting from './src/components/Setting/Setting';
import Header from './src/components/Header';

StatusBar.setHidden(true);

const AppShop = TabNavigator(
  {
    Shop: { 
      screen: Shop,
    },
    Cart: { 
      screen: Cart 
    },
    Search: { 
      screen: Search 
    },
    Setting: { 
      screen: Setting 
    }
  },{
    tabBarPosition: 'bottom'
  }
);

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppShop />
      </View>
    );
  }
}
