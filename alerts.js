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
      <Image source={require('./img/s8.png')} style={{width: 400, height: 700}}>
      <View style={styles.container}>
          <TouchableHighlight style={styles.button} onPress={ () => this.props.navigator.pop() }>
            <Text style={styles.buttonText}>{this.props.contact.firstName.toUpperCase()}</Text>
          </TouchableHighlight>

        
      </View>
      </Image>


    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderColor: '#586776',
    borderWidth: 2,
    height: 50,
    width: 100,
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 20
  },

  buttonText: {
  fontSize:15,
  color: '#bebea7'
  }
});

module.exports = Alerts;
