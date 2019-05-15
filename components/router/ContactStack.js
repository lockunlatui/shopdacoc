import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Contact from '../screens/home/Contact.js';

export const ContactStack = createStackNavigator({
  Screen_Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'CONTACT',
      header: headerProps => headerProps => <Contact />
    }
  }
});
