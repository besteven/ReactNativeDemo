import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {BottomNav} from './../BottomNav/BottomNav';
export default class Main extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
          <Text>Main Component</Text>
          <Button
            onPress={() => navigate('DrawerOpen')}
            title="Open Drawer"
            styles={{width:20}}
          />
          <BottomNav navigation={this.props.navigation}/>
      </View>
    );
  }
}
Main.router = BottomNav.router;
