import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
 ImageBackground
} from "react-native";
import Swiper from "react-native-swiper";
import style from "../../../Style.js";
import API from "../../api/api.js";
const url = API + "/images/type/";
const { height, width } = Dimensions.get("window");
const imageWidthCategory = width;
const imageHeightCategory = imageWidthCategory / 1366 * 550;

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSwiper: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visibleSwiper: true });
    }, 1000);
  }

  gotoListCart(category) {
    this.props.navigation.navigate("Screen_ListCart", category);
  }

  render() {
    const { types } = this.props;
    let swiper = null;
    if (this.state.visibleSwiper) {
      swiper = (
        <Swiper
          autoplay={true}
          width={imageWidthCategory}
          height={imageHeightCategory}
        >
          {types.map(e =>
            <TouchableOpacity
              onPress={() => {
                this.gotoListCart(e);
              }}
              key={e.ID}
            >
              <ImageBackground
                source={{ uri: `${url}${e.IMAGE}` }}
                style={style.imageStyle}
              >
                <Text style={style.namePS}>
                  {e.TENLOAISP}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        </Swiper>
      );
    } else {
      swiper = <View />;
    }
    return (
      <View style={style.wrapperCategory}>
        <View
          style={{
            justifyContent: "center",
            height: 50
          }}
        >
          <Text style={style.textStyle}>Collection</Text>
        </View>
        <View
          style={{
            flex: 4
          }}
        >
          {swiper}
        </View>
      </View>
    );
  }
}
