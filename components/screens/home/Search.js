import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView
} from "react-native";
import AyMenu from "../../../images/menu.png";
import AyCart from "../../../images/cart.png";
import style from "../../../Style.js";
import search from "../../api/searchProduct.js";
import global from "../../Global.js";
import BackPage from "./BackPage.js";

import API from "../../api/api.js";
const url = API + "/images/";
const { height, width } = Dimensions.get("window");
const imageWidthCategory = width / 4;
const imageHeightCategory = imageWidthCategory / 700 * 1024;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtSearch: ""
    };
    global.setArraySearch = this.setArraySearch.bind(this);
  }
  setArraySearch(arrProduct) {
    this.setState({
      arrProduct
    });
  }
  onSearch() {
    const { txtSearch } = this.state;
    search(txtSearch)
      .then(arrProduct => {
        global.setArraySearch(arrProduct);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={style.heightP}>
          <BackPage navigation={this.props.navigation} />
        </View>
        <View style={{ backgroundColor: "#FFF" }}>
          <View style={{ margin: 10 }}>
            <TextInput
              value={this.state.txtSearch}
              underlineColorAndroid="transparent"
              style={style.textInput}
              placeholder="What do you want to buy"
              onChangeText={text =>
                this.setState({
                  txtSearch: text
                })}
              onSubmitEditing={this.onSearch.bind(this)}
            />
          </View>
        </View>
        <View style={{ flex: 1, margin: 10 }}>
          <FlatList
            keyExtractor={item => item.IDSP}
            data={this.state.arrProduct}
            renderItem={({ item }) =>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Screen_DetailProduct", item);
                }}
                key={item.IDSP}
              >
                <View
                  style={{
                    backgroundColor: "#FFF",
                    flexDirection: "row",
                    marginBottom: 10
                  }}
                >
                  <Image
                    source={{
                      uri: `${url}${item.hinh}`
                    }}
                    style={{
                      width: imageWidthCategory,
                      height: imageHeightCategory,
                      margin: 10
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "column"
                    }}
                  >
                    <Text style={style.titleName}>
                      {item.TENSP}
                    </Text>
                    <View style={style.styleboxMT}>
                      <Text style={style.txtMOTASP}>
                        {item.MOTASP}
                      </Text>
                    </View>
                    <View style={style.vtxtPrice}>
                      <Text style={style.textPrice}>
                        ${item.IDGIA}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>}
          />
        </View>
      </View>
    );
  }
}
