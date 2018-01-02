import React from 'react';
import { TabNavigator } from 'react-navigation';

import Category from './../Category/Category';
import Main from './../Main/Main';

const BottomNav = TabNavigator(
  {
    First: { 
      screen: Main
    },
    Second: { 
      screen: Category 
    }
  }
);

export default BottomNav;
