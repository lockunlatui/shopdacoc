import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import XuanLoc from '../../../images/doxuanloc.jpg';
import LeDat from '../../../images/ledat.jpg';
import accountcard from '../../../images/accountc.png';
import phone from '../../../images/phone.png';
import web from '../../../images/web.png';
import style from '../../../Style.js';

export default class Contact extends Component {
  render() {
    return (
      <ScrollView style={style.contactStyle}>
        <Image style={style.avatar} source={XuanLoc} />
        <View style={style.boxCT}>
          <View style={style.boxstyleCT}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={style.styleAbout}> About </Text>
              <Text style={style.styleNCT}>
                ĐỖ XUÂN LỘC
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={accountcard} />
              <Text style={style.textN}>
                Ngành lập trình di động
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={phone} />
              <Text style={style.textN}>
                0968343185
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={web} />
              <Text style={style.textN}>
                https://www.facebook.com/lockunlatui
              </Text>
            </View>
          </View>
        </View>
        <Image style={style.avatar} source={LeDat} />
        <View style={style.boxCT}>
          <View style={style.boxstyleCT}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={style.styleAbout}> About </Text>
              <Text style={style.styleNCT}>
                LÊ THÀNH ĐẠT
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={accountcard} />
              <Text style={style.textN}>
                Ngành lập trình di động
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={phone} />
              <Text style={style.textN}>
                0968343185
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={web} />
              <Text style={style.textN}>
                https://www.facebook.com/profile.php?id=100006581594732
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
