import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  ListView,
  Button,
  TouchableHighlight,
  View
} from 'react-native';


class Alerts extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  render() {

  //   var onPress = function() {
  //     // Navigate back to contacts
  //     // navigator.pop('contacts');
  //     this.props.navigator.pop();
  // }
    return (
      <View>
          <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
            <Text style={ styles.buttonText }>Back</Text>
          </TouchableHighlight>
        <Text>{this.props.contact.firstName}</Text>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
   	marginTop: 80
  },
  button: {
  	height:60,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
  	fontSize:20
  }
});

module.exports = Alerts;
