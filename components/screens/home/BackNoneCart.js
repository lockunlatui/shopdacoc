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
import logo from "../../../images/logo.png";
import style from "../../../Style.js";

export default class BackNoneCart extends Component {
  render() {
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
          <Text style={style.titleStyle}>CART</Text>
          <TouchableOpacity />
        </View>
      </View>
    );
  }
}
