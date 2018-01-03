import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class CategoryLanding extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1}}>
          <Text>CategoryLanding Component</Text>
          <Button
            onPress={() => navigate('Category', {name: 'Boxes'})}
            title="Category Boxes"
          />
          <Button
            onPress={() => navigate('Category', {name: 'Moving Packs'})}
            title="Moving Packs"
          />
          <Button
            onPress={() => navigate('Category', {name: 'Packing Materials'})}
            title="Packing Materials"
          />
      </View>
  );
  }
}
