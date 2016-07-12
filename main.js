//  Most route componenet - focal point od the application
//  Navigator, component stack
//  By default our application should always show signin.js (twitter digits)s


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native';


var DigitsAuthenticateButton = require("./DigitsAuthenticateButton");

var Contacts = require('./Contacts');
var Alerts = require('./Alerts');

class Navigation extends React.Component{
  render() {
    return (
      <Navigator
        style={styles.container}
         initialRoute={{id: 'Signin', name: 'Index'}}
        renderScene={this.navigatorRenderScene}
         configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'second':
        return (<Second navigator={navigator} title="second" />);
        case 'third':
          return (<Second navigator={navigator} title="third" />);
    }
  }
}
