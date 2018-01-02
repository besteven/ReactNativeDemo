import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Category extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
          <Text>Category Component</Text>
          <Button
            onPress={() => navigate('DrawerOpen')}
            title="Open Drawer"
          />
      </View>
  );
  }
}
