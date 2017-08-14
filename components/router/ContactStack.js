import React from 'react';
import { StackNavigator } from 'react-navigation';
import Contact from '../screens/home/Contact.js';

export const ContactStack = StackNavigator({
  Screen_Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'CONTACT',
      header: headerProps => headerProps => <Contact />
    }
  }
});
