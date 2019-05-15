import React from "react";
import { createStackNavigator } from "react-navigation";
import Home from "../screens/home/Home.js";
import ChangeInfo from "../screens/authentication/ChangeInfo.js";
import Authentication from "../screens/authentication/Authentication.js";
import Cart from "../screens/home/Cart.js";
import DetailProduct from "../screens/home/DetailProduct.js";
import ListCart from "../screens/home/ListCart.js";
import Search from "../screens/home/Search.js";

export const HomeStack = createStackNavigator(
  {
    Screen_Home: {
      screen: Home,
      navigationOptions: {
        title: "HOME ",
        header: headerProps => headerProps => <Home />
      }
    },
    Screen_ChanInfo: {
      screen: ChangeInfo,
      navigationOptions: {
        title: "CHANGE INFO"
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
    },
    Screen_DetailProduct: {
      screen: DetailProduct,
      navigationOptions: {
        title: " DETAIL PRODUCT"
      }
    },
    Screen_ListCart: {
      screen: ListCart,
      navigationOptions: {
        title: "LIST CART"
      }
    },
    Screen_Search: {
      screen: Search,
      navigationOptions: {
        title: "SEARCH PRODUCT"
      }
    }
  },
  {
    headerMode: "none"
  }
);
