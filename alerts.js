import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  ListView,
  Button,
  View
} from 'react-native';


class Alerts extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  onPress() {
    // Navigate back to contacts
    // navigator.pop('contacts');

  }



  render() {
    console.log("In render");
    console.log(this.props);
    return (

      <View>
        <Text>{this.props.contact.firstName}</Text>
      </View>
    );
  }

}
module.exports = Alerts;

//  On press of the contact_name link back to contacts page
// onPress: function(alerts) {
// this.props.navigator.pop(
//   {name: "contacts"}
//   );
