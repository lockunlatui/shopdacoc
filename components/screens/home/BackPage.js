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
import AyBack from "../../../images/back.png";
import AyCart from "../../../images/cart.png";
import logo from "../../../images/logo.png";
import global from "../../Global.js";
import saveCart from "../../api/saveCart.js";
import getCart from "../../api/getCart.js";
import style from "../../../Style.js";

export default class BackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: []
    };
    global.addProductToCart = this.addProductToCart.bind(this);
    global.incrQuantity = this.incrQuantity.bind(this);
    global.decrQuantity = this.decrQuantity.bind(this);
    global.removeProduct = this.removeProduct.bind(this);
  }
  componentDidMount() {
    getCart().then(params =>
      this.setState({
        params
      })
    );
  }

  addProductToCart(sanpham) {
    const isExist = this.state.params.some(
      e => e.sanpham.IDSP === sanpham.IDSP
    );
    if (isExist) return false;
    this.setState(
      {
        params: this.state.params.concat({ sanpham, quantity: 1 })
      },
      () => saveCart(this.state.params)
    );
  }
  incrQuantity(sanphamId) {
    const newCart = this.state.params.map(e => {
      if (e.sanpham.IDSP !== sanphamId) return e;
      return { sanpham: e.sanpham, quantity: e.quantity + 1 };
    });
    this.setState(
      {
        params: newCart
      },
      () => saveCart(this.state.params)
    );
  }
  decrQuantity(sanphamId) {
    const newCart = this.state.params.map(e => {
      if (e.sanpham.IDSP !== sanphamId) return e;
      return { sanpham: e.sanpham, quantity: e.quantity - 1 };
    });
    this.setState(
      {
        params: newCart
      },
      () => saveCart(this.state.params)
    );
  }
  removeProduct(sanphamId) {
    const newCart = this.state.params.filter(e => e.sanpham.IDSP !== sanphamId);
    this.setState(
      {
        params: newCart
      },
      () => saveCart(this.state.params)
    );
  }
  render() {
    const { params } = this.state;
    return (
      <View style={style.wrapper}>
        <View style={style.row1}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Image source={AyBack} style={style.iconStyle} />
          </TouchableOpacity>
          <Text style={style.titleStyle}>DACOC</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Screen_Cart", this.state.params);
            }}
          >
            <Image source={AyCart} style={style.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
