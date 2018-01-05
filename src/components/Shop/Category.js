import React, { Component } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';

class Product extends Component {
  render() {
    var stock = 'In Stock';
    var stockColor = 'limegreen';
    if (this.props.item.stock == 0) {
      stock = 'Out Stock';
      stockColor = 'red';
    }
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Image source={{ uri: this.props.item.image }} style={{ width: 100, height: 100 }} />
        <Text>{this.props.item.name}</Text>
        <Text style={{ fontWeight: 'bold' }}>${this.props.item.price}</Text>
        <Text style={{ color: stockColor }}>{stock}</Text>
      </View >
    );
  }
}

export default class Category extends Component {
  _onPressProduct = (item) => {
    const { navigate } = this.props.navigation;
    navigate('Product', { 'name': item.name, 'item': item });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          data={productList}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={(product) => this._onPressProduct(item)} style={{ flex: 1 }}>
                <Product item={item} index={index}></Product>
              </TouchableOpacity>
            );
          }}
        >

        </FlatList>
      </View>
    );
  }
}

var productList = [
  {
    'key': 1,
    'name': 'Local Moving Box',
    'price': 2.96,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 2,
    'name': 'Strong Moving Box',
    'price': 6.73,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 3,
    'name': 'Premium Wine Box',
    'price': 33.57,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 4,
    'name': 'Book Box',
    'price': 4.49,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 5,
    'name': 'Be Box',
    'price': 9.12,
    'stock': 0,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 6,
    'name': 'Quyen Box',
    'price': 30.09,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 7,
    'name': 'Quyen Box',
    'price': 30.09,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 8,
    'name': 'Quyen Box',
    'price': 30.09,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 9,
    'name': 'Quyen Box',
    'price': 30.09,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
  {
    'key': 10,
    'name': 'Quyen Box',
    'price': 30.09,
    'stock': 1,
    'image': 'https://images-na.ssl-images-amazon.com/images/I/3142lbPvurL._US500_.jpg'
  },
]