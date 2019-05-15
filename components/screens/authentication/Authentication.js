import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import logo from '../../../images/logo.png';
import register from '../../api/register.js';
import style from '../../../Style.js';
import ComponentSignIn from './SignIn.js';
import ComponentSignUp from './SignUp.js';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  gotoSignIn() {
    this.setState({ isSignIn: true });
  }

  signIn() {
    this.setState({ isSignIn: true });
  }

  signUp() {
    this.setState({ isSignIn: false });
  }

  render() {
    const { isSignIn } = this.state;
    const mainJSX = isSignIn
      ? <ComponentSignIn navigation={this.props.navigation} />
      : <ComponentSignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
    return (
      <ImageBackground
        style={style.backgroundImage}
        source={require('../../../images/background.png')}
      >
        <ScrollView>
          <View style={style.container}>
            <View style={style.styleboxAPP}>
              <Image source={logo} style={style.styleLogo} />
              <Text style={style.textnameAPP}>
                DACOC
              </Text>
              <Text style={style.textsloganAPP}>
                Shop Cosplay App For Younger
              </Text>
            </View>
            {mainJSX}
            <View style={style.controlStyle}>
              <TouchableOpacity
                style={style.styleSignIn}
                onPress={this.signIn.bind(this)}
              >
                <Text
                  style={isSignIn ? style.activeStyle : style.inactiveStyle}
                >
                  SIGN IN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.styleSignUp}
                onPress={this.signUp.bind(this)}
              >
                <Text
                  style={!isSignIn ? style.activeStyle : style.inactiveStyle}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
