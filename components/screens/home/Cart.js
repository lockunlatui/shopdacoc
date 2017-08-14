import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import style from "../../../Style.js";
import Back from "./BackNoneCart.js";
import sendOrder from "../../api/sendOrder.js";
import CartView from "./CartView.js";
import saveCart from "../../api/saveCart.js";
import getCart from "../../api/getCart.js";
import checkLogin from "../../api/checkLogin.js";
import global from "../../Global.js";
const { height } = Dimensions.get("window");

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCart: []
    };
    global.addProductToCart = this.addProductToCart.bind(this);
    global.incrQuantity = this.incrQuantity.bind(this);
    global.decrQuantity = this.decrQuantity.bind(this);
    global.removeProduct = this.removeProduct.bind(this);
  }
  componentDidMount() {
    getCart().then(arrayCart =>
      this.setState({
        arrayCart
      })
    );
  }

  addProductToCart(sanpham) {
    const isExist = this.state.arrayCart.some(
      e => e.sanpham.IDSP === sanpham.IDSP
    );
    if (isExist) return false;
    this.setState(
      {
        arrayCart: this.state.arrayCart.concat({ sanpham, quantity: 1 })
      },
      () => saveCart(this.state.arrayCart)
    );
  }
  incrQuantity(sanphamId) {
    const newCart = this.state.arrayCart.map(e => {
      if (e.sanpham.IDSP !== sanphamId) return e;
      return { sanpham: e.sanpham, quantity: e.quantity + 1 };
    });
    this.setState(
      {
        arrayCart: newCart
      },
      () => saveCart(this.state.arrayCart)
    );
  }
  decrQuantity(sanphamId) {
    const newCart = this.state.arrayCart.map(e => {
      if (e.sanpham.IDSP !== sanphamId) return e;
      return { sanpham: e.sanpham, quantity: e.quantity - 1 };
    });
    this.setState(
      {
        arrayCart: newCart
      },
      () => saveCart(this.state.arrayCart)
    );
  }
  removeProduct(sanphamId) {
    const newCart = this.state.arrayCart.filter(
      e => e.sanpham.IDSP !== sanphamId
    );
    this.setState(
      {
        arrayCart: newCart
      },
      () => saveCart(this.state.arrayCart)
    );
  }
  async onSendOrder() {
    try {
      const token = await getToken();
      const arrayDetail = this.props.arrayCart.map(e => ({
        IDSP: e.sanpham.IDSP,
        quantity: e.quantity
      }));
      const kq = await sendOrder(token, arrayDetail);
      if (token === "TOKEN_KHONG_HOP_LE") {
        const { navigate } = this.props.navigation;
        navigate("Screen_Authentication");
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { arrayCart } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#efefef" }}>
        <View style={style.heightP}>
          <Back navigation={this.props.navigation} />
        </View>
        <View style={{ marginTop: 10 }} />
        <CartView navigation={this.props.navigation} arrayCart={arrayCart} />
      </View>
    );
  }
}
