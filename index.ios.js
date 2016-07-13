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

var Main = require('./main');

var MyDigitsDemo = React.createClass({
  render: function() {
    return (
      <Main />
    );
  }
});

AppRegistry.registerComponent('MyDigitsDemo', () => MyDigitsDemo);
