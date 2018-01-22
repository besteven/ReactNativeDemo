import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

export default class CategoryLanding extends Component {
  constructor(){
    super();
    this.state=({
      categories: [],
      token: ''
    });
    try{
      let account = {
        'username': 'admin',
        'password': 'admin999'
      };
      fetch('http://mgs.arrowhitech.net/service/rest/V1/integration/admin/token',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          password: 'admin999',
        })
      }).then((response) => {
        let token = response._bodyText;
        this.setState({ token });
        fetch('http://mgs.arrowhitech.net/service/rest/V1/categories',{
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token),
          }
        }).then((responseCategories) => {
          let categoryJson = JSON.parse(responseCategories._bodyText);
          this.setState({
            categories: categoryJson.children_data
          });
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  _onPressCategory = (item) => {
    const { navigate } = this.props.navigation;
    let name = item.name;
    navigate('Category', { 'name': name, 'item': item, 'token': this.state.token });
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

          <FlatList
            data={this.state.categories}
            numColumns={3}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={(name) => this._onPressCategory(item)}>
                  <Text style={styles.itemText}>{item.name} - {item.product_count}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => item.id}
          >
          </FlatList>
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