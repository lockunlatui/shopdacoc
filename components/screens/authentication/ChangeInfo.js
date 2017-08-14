import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import style from "../../../Style.js";
import getToken from "../../api/getToken.js";
import changeInfoApi from "../../api/checkInfo.js";
import global from "../../Global.js";
import BackPage from "../home/BackPage.js";

export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      txtEMAIL: params.EMAIL,
      txtTENKH: params.TENKH,
      txtSDT: params.SDT,
      txtADDRESS: params.ADDRESS
    };
  }

  gotoBack() {
    this.props.navigation.navigate("Screen_Home");
    this.props.navigation.navigate("DrawerOpen");
  }
  alertSuccess() {
    Alert.alert(
      "Notice",
      "Change Info Success",
      [
        {
          text: "OK",
          onPress: this.gotoBack.bind(this)
        }
      ],
      { cancelable: false }
    );
  }

  onChangeInfo() {
    const { txtTENKH, txtSDT, txtADDRESS } = this.state;
    getToken()
      .then(token => changeInfoApi(token, txtTENKH, txtSDT, txtADDRESS))
      .then(user => {
        this.alertSuccess();
        global.onSignIn(user);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { txtEMAIL, txtTENKH, txtSDT, txtADDRESS } = this.state;
    return (
      <View style={style.containerCI}>
        <BackPage navigation={this.props.navigation} />
        <View style={{ margin: 10, marginBottom: 200 }}>
          <View style={style.styleboxInfo}>
            <Text style={style.textPer}> PERSONAL INFOMATION </Text>

            <View style={style.styleNEP}>
              <Text style={style.textNEP}>
                {txtEMAIL}
              </Text>
            </View>

            <TextInput
              value={txtTENKH}
              onChangeText={text =>
                this.setState({ ...this.state, txtTENKH: text })}
              style={style.textNEP}
              underlineColorAndroid="transparent"
            />
            <TextInput
              value={"0" + txtSDT}
              onChangeText={text =>
                this.setState({ ...this.state, txtSDT: text })}
              style={style.textNEP}
              underlineColorAndroid="transparent"
            />
            <TextInput
              value={txtADDRESS}
              onChangeText={text =>
                this.setState({ ...this.state, txtADDRESS: text })}
              style={style.textNEP}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity
              onPress={this.onChangeInfo.bind(this)}
              style={style.btnCI}
            >
              <Text style={style.textCI}> CHANGE INFO </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
