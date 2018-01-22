import React, { Component } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';

class Product extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Text>{this.props.item.sku}</Text>
      </View >
    );
  }
}

export default class Category extends Component {
  constructor(props) {
    super(props);
    let {token} = this.props.navigation.state.params;
    this.state=({
      productList: [],
      token
    });
    let { item } = this.props.navigation.state.params;
    let productDetails = [];
    fetch(`http://mgs.arrowhitech.net/service/rest/V1/categories/${item.id}/products`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(token),
      }
    }).then((responseProducts) => {
      let productJson = JSON.parse(responseProducts._bodyText);
      let productDetails = [];
      productJson.map((product) => {
        productDetails.push(product);
      });
      this.setState({productList : productDetails});
    });
  }

  _onPressProduct = (item) => {
    const { navigate } = this.props.navigation;
    navigate('Product', { 'name': item.sku, 'item': item, 'token': this.state.token });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          data={this.state.productList}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={(product) => this._onPressProduct(item)} style={{ flex: 1 }}>
                <Product item={item} index={index}></Product>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.sku}
        >
        </FlatList>
      </View>
    );
  }
}
