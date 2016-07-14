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
      <Image source={require('./img/s8.png')} style={{width: 375, height: 700}}>

          <TouchableHighlight style={styles.button} onPress={ () => this.props.navigator.pop() }>
            <Text style={styles.buttonText}> <View style={styles.triangle} />{this.props.contact.firstName.toUpperCase()}</Text>
          </TouchableHighlight>
          <View style={styles.container}>
            <View style={styles.timeBox}>
              <View style={styles.timeCheck} />
              <View style={styles.timeCheck} />
              <View style={styles.timeCheck} />
          </View>

         <View style={styles.alertBox}><Text style={styles.alertText}>MESSAGE</Text></View>
         <View style={styles.submit}><Text style={styles.submitText}>SEND</Text></View>
      </View>
    </Image>


    );
  }
}

var styles = StyleSheet.create({
  container: {
  // flex: 1,
  // justifyContent:  'center',
  alignItems:'center'
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
  color: '#bebea7',

},

  timeCheck: {
  width: 60,
  height: 60,
  backgroundColor: '#272b44',
  margin: 15,
  borderRadius: 10
},

  timeBox: {
  marginTop: 100,
  flexDirection: 'row',
  justifyContent:'center',
  alignItems: 'center',

},

  triangle: {
  borderColor: '#bebea7',
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderLeftWidth: 8,
  borderRightWidth: 8,
  borderBottomWidth: 16,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#bebea7',
  transform: [
   {rotate: '270deg'}
  ],
  },

  alertBox: {
  borderColor: '#bebea7',
  borderWidth: 2,
  height: 200,
  width: 300,
  borderRadius: 15,
  marginTop: 80,
  alignItems: 'center'


},
  submit: {
  backgroundColor: '#bebea7',
  height: 50,
  width: 170,
  justifyContent: 'center',
  borderRadius: 15,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center'

  },

  alertText: {
  color: 'white',
  fontSize: 20,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
},

  submitText: {
  justifyContent: 'center',
  color: '#272b44',
  fontSize: 20,
  fontWeight: 'bold',
  alignItems: 'center'
  }

});

module.exports = Alerts;
