import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import avatar from '../../../images/avatar.png';
import signin from '../../../images/signin.png';
import changeinfo from '../../../images/changeinfo.png';
import logout from '../../../images/logout.png';
import style from '../../../Style.js';
import global from '../../Global.js';
import saveToken from '../../api/saveToken.js';

export default class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { user: null };
    global.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(user) {
    this.setState({ user });
  }

  onLogout() {
    this.setState({
      user: null
    });
    saveToken('');
  }

  render() {
    const { user } = this.state;
    const logoutJSX = (
      <View>
        <Image source={avatar} style={style.avatarImage} />
        <TouchableOpacity style={style.btnStyle}>
          <Image style={style.styleImageSI} source={signin} />
          <Text
            style={style.btnText}
            onPress={() => {
              this.props.navigation.navigate('Screen_Authentication');
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX = (
      <View style={style.loginContainer}>
        <View style={style.nameMem}>
          <Image source={avatar} style={style.avatarImage} />
          <Text style={style.nameMemStyle}> {user ? user.TENKH : ''} </Text>
        </View>
        <View>
          <TouchableOpacity
            style={style.btnStyle}
            onPress={() => {
              this.props.navigation.navigate(
                'Screen_ChanInfo',
                this.state.user
              );
            }}
          >
            <Image style={style.styleImageSI} source={changeinfo} />
            <Text style={style.btnText}>
              My Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onLogout.bind(this)}
            style={style.btnStyle}
          >
            <Image style={style.styleImageSI} source={logout} />
            <Text style={style.btnText}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const mainJSX = this.state.user ? loginJSX : logoutJSX;
    return (
      <View style={style.containerMenu}>
        {mainJSX}
      </View>
    );
  }
}
