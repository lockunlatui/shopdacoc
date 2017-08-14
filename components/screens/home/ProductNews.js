import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList
} from "react-native";
import style from "../../../Style.js";
import API from "../../api/api.js";
const url = API + "/images/";

export default class ProductNews extends Component {
  gotoDetailProduct(sanpham) {
    const { navigate } = this.props.navigation;
    navigate("Screen_DetailProduct", sanpham);
  }
  render() {
    const { products } = this.props;
    return (
      <View style={style.containerN}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Products New</Text>
        </View>
        <FlatList
          numColumns={2}
          horizontal={false}
          keyExtractor={item => item.IDSP}
          data={this.props.products}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => {
                this.gotoDetailProduct(item);
              }}
              style={style.productContainer}
              key={item.IDSP}
            >
              <View style={style.boxProduct}>
                <Image
                  source={{
                    uri: `${url}${item.hinh}`
                  }}
                  style={style.productImage}
                />
                <Text style={style.titleName}>
                  {item.TENSP}
                </Text>
                <View style={style.boxPrice}>
                  <Text style={style.titlePrice}>
                    ${item.IDGIA}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>}
        />
      </View>
    );
  }
}
