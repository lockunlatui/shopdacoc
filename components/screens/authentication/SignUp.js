import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import style from '../../../Style.js';
import register from '../../api/register.js';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TENKH: '',
      EMAIL: '',
      SDT: '',
      PASSWORD: '',
      rePASSWORD: ''
    };
  }

  onSuccess() {
    Alert.alert(
      'Notice',
      'Sign Up Success',
      [
        {
          text: 'OK',
          onPress: this.props.gotoSignIn()
        }
      ],
      { cancelable: false }
    );
  }

  onFail() {
    Alert.alert(
      'Notice',
      'Email is ton tai ',
      [
        {
          text: 'OK',
          onPress: () => this.setState({ EMAIL: '' })
        }
      ],
      { cancelable: false }
    );
  }

  registerUser() {
    const { EMAIL, TENKH, SDT, PASSWORD } = this.state;
    register(EMAIL, TENKH, SDT, PASSWORD).then(res => {
      if (res === 'THANH_CONG') return this.onSuccess();
      this.onFail();
    });
  }

  render() {
    return (
      <View style={style.boxInputStyle}>
        <View style={style.styleboxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={style.inputStyle}
            placeholder=" Enter your Email"
            value={this.state.EMAIL}
            onChangeText={text => this.setState({ EMAIL: text })}
          />
        </View>
        <View style={style.styleboxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={style.inputStyle}
            placeholder=" Enter your Name"
            value={this.state.TENKH}
            onChangeText={text => this.setState({ TENKH: text })}
          />
        </View>
        <View style={style.styleboxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={style.inputStyle}
            placeholder=" Enter your Number Phone"
            value={this.state.SDT}
            onChangeText={number => this.setState({ SDT: number })}
          />
        </View>
        <View style={style.styleboxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={style.inputStyle}
            placeholder=" Enter your Password"
            value={this.state.PASSWORD}
            onChangeText={text => this.setState({ PASSWORD: text })}
            secureTextEntry
          />
        </View>
        <View style={style.styleboxInput}>
          <TextInput
            underlineColorAndroid="transparent"
            style={style.inputStyle}
            placeholder=" Re-enter your Password"
            value={this.state.rePASSWORD}
            onChangeText={text => this.setState({ rePASSWORD: text })}
            secureTextEntry
          />
        </View>
        <View style={style.styleboxInput}>
          <TouchableOpacity
            style={style.btnButton}
            onPress={this.registerUser.bind(this)}
          >
            <Text style={style.styleButton}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
