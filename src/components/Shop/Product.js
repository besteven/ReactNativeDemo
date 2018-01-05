import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class Product extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    var stock = 'In Stock';
    var stockColor = 'limegreen';
    if (item.stock == 0) {
      stock = 'Out Stock';
      stockColor = 'red';
    }
    return (
      <View style={{ flex: 1,}}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image source={{ uri: item.image }} style={{ width: 180, height: 180 }} />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text>{item.name}</Text>
          <Text style={{ fontWeight: 'bold' }}>${item.price}</Text>
          <Text style={{ color: stockColor }}>{stock}</Text>
        </View>
      </View>
    );
  }
}
