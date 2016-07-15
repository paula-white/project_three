import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  ListView,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  TextInput,
  View
} from 'react-native';


class Alerts extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  render() {

    var image;
    var styles;

    var randomNumber = Math.random();

    if (randomNumber < 0.34) {
        image = require("./img/s1.png");
        styles = require("./styles/style1.js");
    } else if (randomNumber < 0.12) {
        image = require("./img/s2.png");
        styles = require("./styles/style2.js");
    }  else if (randomNumber < 0.55) {
        image = require("./img/s4.png");
        styles = require("./styles/style4.js");
    }  else if (randomNumber < 0.64) {
        image = require("./img/daytime.png");
        styles = require("./styles/styledaytime.js");
    } else if (randomNumber < 0.47) {
        image = require("./img/s6.png");
        styles = require("./styles/style6.js");
    }  else {
        image = require("./img/s5.png");
        styles = require("./styles/style5.js");
    }
    return (
      <Image source={image} style={{width: 375, height: 700}}>
          <TouchableHighlight style={styles.button} onPress={ () => this.props.navigator.pop() }>
            <View style={styles.emptyView}>
              <View style={styles.triangle} />
              <Text style={styles.buttonText}>{this.props.contact.firstName.toUpperCase()}</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.container}>
            <View style={styles.timeBox}>
              <View style={styles.timeCheck}><Text style={styles.timeText}>10</Text></View>
              <View style={styles.timeCheck}><Text style={styles.timeText}>15</Text></View>
              <View style={styles.timeCheck}><Text style={styles.timeText}>AM</Text></View>
          </View>
          <TextInput
            placeholder="MESSAGE"
            style={styles.inputs}/>
            <View style={styles.submit}><Text style={styles.submitText} onPress={() => Alert.alert('MESSAGE SENT', "",[
             {text: 'OK', onPress: () => this.props.navigator.pop()}])}>SEND</Text></View>
         </View>
     </Image>


    );
  }
}

module.exports = Alerts;
