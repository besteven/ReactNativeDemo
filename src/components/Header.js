import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{height:50,backgroundColor:'#878787',flexDirection: 'row',justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <Image source={require('../images/icon_menu.png')} />
        </TouchableOpacity>
        <Text style={{color:'#fff'}}>Boxes Direct</Text>
      </View>
    );
  }
}
