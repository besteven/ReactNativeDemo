import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state=({
      product: ''
    });
    let { item } = this.props.navigation.state.params;
    let { token } = this.props.navigation.state.params;
    fetch(`http://mgs.arrowhitech.net/service/rest/V1/products/${item.sku}`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(token),
      }
    }).then((responseProduct) => {
      let productJson = JSON.parse(responseProduct._bodyText);
      this.setState({
        product: productJson
      })
    });
  }
  render() {
    
    let product = this.state.product;
    return (
      <View style={{ flex: 1,}}>
        
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text>Product Name: {product.name}</Text>
          <Text>SKU: {product.sku}</Text>
          <Text>Price: {product.price}</Text>
        </View>
      </View>
    );
  }
}
