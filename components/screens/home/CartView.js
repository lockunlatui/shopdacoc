import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Alert
} from "react-native";
import API from "../../api/api.js";
const url = API + "/images/";
import deleteSP from "../../../images/delete.png";
import global from "../../Global.js";
import style from "../../../Style.js";
import Back from "./BackNoneCart.js";
import sendOrder from "../../api/sendOrder.js";
import getToken from "../../api/getToken.js";
import { NavigationActions } from "react-navigation";
const { height } = Dimensions.get("window");

export default class CartView extends Component {
  incrQuantity(IDSP) {
    global.incrQuantity(IDSP);
  }
  decrQuantity(IDSP) {
    global.decrQuantity(IDSP);
  }
  removeProduct(IDSP) {
    global.removeProduct(IDSP);
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
    const { arrayCart } = this.props;
    const arrTotal = arrayCart.map(e => e.sanpham.IDGIA * e.quantity);
    const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
    return (
      <View style={{ flex: 1, backgroundColor: "#efefef" }}>
        <FlatList
          keyExtractor={item => item.sanpham.IDSP}
          data={this.props.arrayCart}
          renderItem={({ item }) =>
            <View style={style.boxlist}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate(
                    "Screen_DetailProduct",
                    item.sanpham
                  );
                }}
                style={style.containerCart}
              >
                <View>
                  <Image
                    style={style.imageProductStyle}
                    source={{
                      uri: `${url}${item.sanpham.hinh}`
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                      justifyContent: "center"
                    }}
                  >
                    <TouchableOpacity
                      style={style.indeNumber}
                      onPress={() => this.incrQuantity(item.sanpham.IDSP)}
                    >
                      <Text style={style.textindeNumber}>+</Text>
                    </TouchableOpacity>
                    <View style={style.numberProduct}>
                      <Text style={style.textnumberProduct}>
                        {item.quantity}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.decrQuantity(item.sanpham.IDSP)}
                      style={style.indeNumber}
                    >
                      <Text style={style.textindeNumber}>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ width: 100 }}>
                  <Text style={style.nameProduct}>
                    {item.sanpham.TENSP}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={style.textPrice}>Price:</Text>
                    <Text style={style.textstylePrice}>
                      ${item.sanpham.IDGIA}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => this.removeProduct(item.sanpham.IDSP)}
                >
                  <Image style={style.btnXoaHang} source={deleteSP} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>}
        />
        <View style={style.controlBuy}>
          <TouchableOpacity
            style={style.btnBuyProduct}
            onPress={this.onSendOrder.bind(this)}
          >
            <Text style={style.textBuyProduct}>CHECKOUT</Text>
            <Text style={style.priceTotalMoney}>
              ${total}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
