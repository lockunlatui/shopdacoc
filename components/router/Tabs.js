import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { StyleSheet, Image } from "react-native";
import Home from "../screens/home/Home.js";
import ChangeInfo from "../screens/authentication/ChangeInfo.js";
import { SaleStack } from "./SaleStack.js";
import { NewStack } from "./NewStack.js";
import { HomeStack } from "./HomeStack.js";
import { ContactStack } from "./ContactStack.js";
import AyHome from "../../images/home.png";
import AySale from "../../images/sale.png";
import AyNew from "../../images/new.png";
import AyContacts from "../../images/contacts.png";

export const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
          <Image
            source={AyHome}
            style={[styles.icon, { tintColor: tintColor }]}
          />
      }
    },
    Screen_Sale: {
      screen: SaleStack,
      navigationOptions: {
        tabBarLabel: "Sales",
        tabBarIcon: ({ tintColor }) =>
          <Image
            source={AySale}
            style={[styles.icon, { tintColor: tintColor }]}
          />
      }
    },
    Screen_New: {
      screen: NewStack,
      navigationOptions: {
        tabBarLabel: "News",
        tabBarIcon: ({ tintColor }) =>
          <Image
            source={AyNew}
            style={[styles.icon, { tintColor: tintColor }]}
          />
      }
    },
    Screen_Contact: {
      screen: ContactStack,
      navigationOptions: {
        tabBarLabel: "Contact",
        tabBarIcon: ({ tintColor }) =>
          <Image
            source={AyContacts}
            style={[styles.icon, { tintColor: tintColor }]}
          />
      }
    }
  },
  {
    ...TabNavigator.Presets.AndroidTopTabs,
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      labelStyle: {
        fontSize: 11
      },
      style: {
        backgroundColor: "#fff"
      },
      activeTintColor: "#ff6f66",
      inactiveTintColor: "#979797",
      showIcon: true
    }
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  }
});
