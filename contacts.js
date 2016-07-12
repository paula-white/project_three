import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigation,
  Text,
  View
} from 'react-native';

class Contacts extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}

          } />
    );
  }



  module.exports = Contacts;
