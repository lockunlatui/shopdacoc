import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import global from "../../Global.js";
import style from "../../../Style.js";
import BackPage from "./BackPage.js";
import API from "../../api/api.js";
const url = API + "/images/";

export default class DetailProduct extends Component {
  addThisProductToCart() {
    const { params } = this.props.navigation.state;
    global.addProductToCart(params);
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={style.containerDP}>
        <View style={style.heightP}>
          <BackPage navigation={this.props.navigation} params={params} />
        </View>
        <View style={{ margin: 10 }}>
          <View style={style.styleImageProduct}>
            <Image
              style={style.productImage}
              source={{ uri: `${url}${params.hinh}` }}
            />
          </View>
          <View style={style.styleboxDetail}>
            <Text style={style.styletextDetail}> Detail </Text>
            <Text style={style.textDetail}>
              {params.MOTASP}
            </Text>
          </View>
          <TouchableOpacity
            onPress={this.addThisProductToCart.bind(this)}
            style={style.btnATC}
          >
            <Text style={style.textATC}> Add To Cart </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
