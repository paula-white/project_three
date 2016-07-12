import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class Alerts extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}

          } />
    );
  }



  module.exports = Alerts;
