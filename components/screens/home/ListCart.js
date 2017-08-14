import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  RefreshControl
} from "react-native";
import style from "../../../Style.js";
import getListProduct from "../../api/getListProduct.js";
import BackPage from "./BackPage.js";
import API from "../../api/api.js";
const url = API + "/images/";
const { height, width } = Dimensions.get("window");
const imageWidthCategory = width / 4;
const imageHeightCategory = imageWidthCategory / 700 * 1024;

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      page: 1
    };
    arr = [];
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    const idType = params.ID;
    getListProduct(idType, 1)
      .then(arrProduct => {
        arr = arrProduct;
        this.setState({
          arr
        });
      })
      .catch(error => this.setState({ error }));
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          marginBottom: -20
        }}
      />
    );
  };
  render() {
    return (
      <View style={style.wrapperLC}>
        <View style={style.heightP}>
          <BackPage navigation={this.props.navigation} />
        </View>
        <FlatList
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.IDSP}
          data={this.state.arr}
          renderItem={({ item }) =>
            <View style={style.boxAll}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Screen_DetailProduct", item);
                }}
                key={item.IDSP}
              >
                <View style={style.styleboxLC}>
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
              </TouchableOpacity>
            </View>}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                const newPage = this.state.page + 1;
                const { params } = this.props.navigation.state;
                const idType = params.ID;
                getListProduct(idType, newPage)
                  .then(arrProduct => {
                    arr = arr.concat(arrProduct);
                    this.setState({
                      arr,
                      refreshing: false
                    });
                  })
                  .catch(err => console.log(err));
              }}
            />
          }
        />
      </View>
    );
  }
}
