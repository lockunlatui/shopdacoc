import React, { Component } from "react";
import { StackNavigator } from "react-native";
import Cart from "../screens/home/Cart.js";
import Home from "../screens/home/Home.js";
import DetailProduct from "../screens/home/DetailProduct.js";

export const CartStack = StackNavigator({
  Screen_Cart: {
    screen: Cart,
    navigationOptions: {
      header: headerProps => headerProps => <Cart />
    }
  },
  Screen_Home: {
    screen: Home,
    navigationOptions: {}
  },
  Screen_DetailProduct: {
    screen: DetailProduct,
    navigationOptions: {}
  }
});
