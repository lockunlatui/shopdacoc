import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import style from '../../../Style.js';
import signIn from '../../api/signIn.js';
import global from '../../Global.js';
import saveToken from '../../api/saveToken.js';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: '',
      PASSWORD: ''
    };
  }

  onSignIn() {
    const { EMAIL, PASSWORD } = this.state;
    signIn(EMAIL, PASSWORD)
      .then(res => {
        global.onSignIn(res.user);
        this.props.navigation.navigate('Screen_Home');
        this.props.navigation.navigate('DrawerOpen');
        saveToken(res.token);
      })
      .catch(error => console.log(error));
  }
  render() {
    const { EMAIL, PASSWORD } = this.state;
    return (
      <View style={style.boxInputStyle}>
        <View style={style.styleboxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={style.inputStyle}
            placeholder=" Enter your email"
            value={EMAIL}
            onChangeText={text => this.setState({ EMAIL: text })}
          />
        </View>
        <View style={style.styleboxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={style.inputStyle}
            placeholder=" Enter your password"
            value={PASSWORD}
            onChangeText={text => this.setState({ PASSWORD: text })}
            secureTextEntry
          />
        </View>
        <View style={style.styleboxInput}>
          <TouchableOpacity
            onPress={this.onSignIn.bind(this)}
            style={style.btnButton}
          >
            <Text style={style.styleButton}> SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
