import React from "react";
import { createStackNavigator } from "react-navigation";
import Sales from "../screens/home/Sales.js";
import ChangeInfo from "../screens/authentication/ChangeInfo.js";
import DetailProduct from "../screens/home/DetailProduct.js";
import Cart from "../screens/home/Cart.js";
import Authentication from "../screens/authentication/Authentication.js";

export const SaleStack = createStackNavigator(
  {
    Screen_Sale: {
      screen: Sales,
      navigationOptions: {
        title: "SALE PRODUCTS",
        header: headerProps => headerProps => <Sales />
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
