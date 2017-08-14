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
import logo from "../../../images/logo.png";
import global from "../../Global.js";
import style from "../../../Style.js";
import getToken from "../../api/getToken.js";
import refreshToken from "../../api/refreshToken.js";

export default class Header extends Component {
  componentDidMount() {
    setInterval(refreshToken, 30000);
    getToken()
      .then(token => checkLogin(token))
      .then(res => global.onSignIn(res.user))
      .catch(error =>
        this.setState({
          error
        })
      );
  }
  render() {
    return (
      <View style={style.wrapper}>
        <View style={style.row1}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("DrawerOpen");
            }}
          >
            <Image source={AyMenu} style={style.iconStyle} />
          </TouchableOpacity>
          <Text style={style.titleStyle}>DACOC</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Screen_Cart");
            }}
          >
            <Image source={AyCart} style={style.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
