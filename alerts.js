import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  ListView,
  Button,
  TouchableHighlight,
  AlertIOS,
  Image,
  View
} from 'react-native';


class Alerts extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  render() {
    return (
      <View>
          <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
            <Text style={styles.buttonText }>Back</Text>
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
    borderColor: '#586776',
    borderWidth: 2,
    height: 50,
    width: 230,
    justifyContent: 'center',
    borderRadius: 15
  },

  buttonText: {
  fontSize:15
  }
});

module.exports = Alerts;
