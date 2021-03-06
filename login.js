/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  NativeModules,
  Navigator,
  ListView,
  Text,
  View
} from 'react-native';

var Digits = require('react-native-fabric-digits');
var { DigitsLoginButton, DigitsLogoutButton } = Digits;

var Login = React.createClass({
  getInitialState: function() {
    return { logged: false, error: false, response: {} };
  },

  completion: function(error, response) {
    if (error && error.code !== 1) {
      this.setState({ logged: false, error: true, response: {} });
    } else if (response) {
      var logged = JSON.stringify(response) === '{}' ? false : true;


      // this.setState({ logged: logged, error: false, response: response });
      if (logged) {
        this.props.callback();
      }
    }
  },
  renderLogin: function() {
    return (
      <DigitsLoginButton
        options={{
          title: "LOGIN",
          phoneNumber: "+61",
          appearance: {
            backgroundColor: {
              hex: "#0f1324",
              alpha: 1.0
            },
            accentColor: {
              hex: "#FFFFFF",
              alpha: 0.7
            },
            headerFont: {
              name: "Arial",
              size: 16
            },
            labelFont: {
              name: "Helvetica",
              size: 18
            },
            bodyFont: {
              name: "Helvetica",
              size: 16
            }
          }
        }}
        completion={this.completion}
        text="LOGIN"
        buttonStyle={styles.DigitsAuthenticateButton}
        textStyle={styles.DigitsAuthenticateButtonText}/>
      );
  },


  render: function() {
    var error = this.state.error ? <Text>An error occured.</Text> : null;
    var content = this.renderLogin();
    return (
      <View style={styles.container}>
        {error}
        {content}
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f1324'
  },
  DigitsAuthenticateButton: {
    borderColor: '#586776',
    borderWidth: 2,
    height: 50,
    width: 230,
    justifyContent: 'center',
    borderRadius: 15
  },
  DigitsAuthenticateButtonText: {
    fontSize: 20,
    color: '#586776',
    alignSelf: 'center',

  }
});

module.exports = Login;
