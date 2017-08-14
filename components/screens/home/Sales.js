import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView
} from "react-native";
import AyMenu from "../../../images/menu.png";
import AyCart from "../../../images/cart.png";
import ProductSales from "./ProductSales.js";
import Header from "./Header.js";
import logo from "../../../images/logo.png";
import global from "../../Global.js";
import sale from "../../api/getSale.js";
import style from "../../../Style.js";
import Search from "./Search.js";

export default class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      products: []
    };
    global.gotoSearch = this.gotoSearch.bind(this);
  }
  gotoSearch() {
    const { navigate } = this.props.navigation;
    navigate("Screen_Search");
  }
  componentDidMount() {
    sale().then(resJSON => {
      const { type, sanpham } = resJSON;
      this.setState({ types: type, products: sanpham });
    });
  }
  render() {
    const { types, products } = this.state;
    return (
      <View>
        <View style={style.heightP}>
          <Header navigation={this.props.navigation} />
        </View>
        <View style={{ backgroundColor: "#FFF" }}>
          <View style={{ margin: 10 }}>
            <TextInput
              underlineColorAndroid="transparent"
              style={style.textInput}
              placeholder="What do you want to buy"
              onFocus={() => global.gotoSearch()}
            />
          </View>
        </View>
        <ScrollView>
          <ProductSales
            navigation={this.props.navigation}
            products={products}
          />
        </ScrollView>
      </View>
    );
  }
}
