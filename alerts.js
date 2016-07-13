import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  Button,
  View
} from 'react-native';


class Alerts extends Component {
  onPress() {
    // Navigate back to contacts
    // navigator.pop('contacts');
  }

  render() {
    return (
      <Text>{this.props.contact_id}</Text>
    );
  }

}
module.exports = Alerts;




//
// <Navigator
//     renderScene={this.renderScene.bind(this)}
//     navigator={this.props.navigator}
//
//     } />
