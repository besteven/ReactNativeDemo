import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class CategoryLanding extends Component {
  _onPressCategory = (name) => {
    const { navigate } = this.props.navigation;
    navigate('Category', { name });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", marginBottom: 10, borderWidth: 1, borderColor: "#ddd", paddingBottom: 10 }}>
          <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Avoid the <Text style={{ color: "red" }}>tears.</Text></Text>
            <Text>Protect your fragile items.</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require('./../../images/cate_landing_top_banner.png')} style={styles.itemImage} />
          </View>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.item} onPress={(name) => this._onPressCategory('Boxes')}>
            <Image source={require('./../../images/cate_boxes.png')} style={styles.itemImage} />
            <Text style={styles.itemText}>Boxes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={(name) => this._onPressCategory('Moving Packs')}>
            <Image source={require('./../../images/cate_moving_pack.png')} style={styles.itemImage} />
            <Text style={styles.itemText}>Moving Packs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={(name) => this._onPressCategory('Packing Materials')}>
            <Image source={require('./../../images/cate_packing_materials.png')} style={styles.itemImage} />
            <Text style={styles.itemText}>Packing Materials</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.item} onPress={(name) => this._onPressCategory('Wine Storage & Transport')}>
            <Image source={require('./../../images/cate_wine.png')} style={styles.itemImage} />
            <Text style={styles.itemText}>Wine Storage & Transport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={(name) => this._onPressCategory('TV\'s')}>
            <Image source={require('./../../images/cate_tv.png')} style={styles.itemImage} />
            <Text style={styles.itemText}>TV's</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={(name) => this._onPressCategory('Moving Product')}>
            <Image source={require('./../../images/cate_moving_product.png')} style={styles.itemImage} />
            <Text style={styles.itemText}>Moving Product</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",

  },
  item: {
    width: 100,
    marginBottom: 10,
  },
  itemText: {
    textAlign: "center"
  }
});