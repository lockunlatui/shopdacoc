import React from "react";
import { createStackNavigator } from "react-navigation";
import News from "../screens/home/News.js";
import ChangeInfo from "../screens/authentication/ChangeInfo.js";
import Menu from "../screens/authentication/Menu.js";
import DetailProduct from "../screens/home/DetailProduct.js";
import Cart from "../screens/home/Cart.js";
import Authentication from "../screens/authentication/Authentication.js";

export const NewStack = createStackNavigator(
  {
    Screen_New: {
      screen: News,
      navigationOptions: {
        title: "NEW PRODUCTS",
        header: headerProps => headerProps => <News />
      }
    },
    Screen_ChanInfo: {
      screen: ChangeInfo,
      navigationOptions: {
        title: "CHANGE INFO"
      }
    },
    Screen_DetailProduct: {
      screen: DetailProduct,
      navigationOptions: {
        title: " DETAIL PRODUCT"
      }
    },
    Screen_Authentication: {
      screen: Authentication,
      navigationOptions: {
        title: "SCREEN LOGIN"
      }
    },
    Screen_Cart: {
      screen: Cart,
      navigationOptions: {
        title: " CART"
      }
    }
  },
  {
    headerMode: "none"
  }
);
