import React, { Component } from 'react';
import { StackNavigator } from 'react-native';
import Cart from '../screens/home/Cart.js';
import DetailProduct from '../screens/home/DetailProduct.js';

export const DetailProductStack = StackNavigator({
  Screen_DetailProduct: {
    screen: DetailProduct,
    navigationOptions: {
      title: 'Detail Product',
      header: headerProps => headerProps => <DetailProduct />
    }
  },
  Screen_Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'Cart'
    }
  }
});
