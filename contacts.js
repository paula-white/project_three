import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  StyleSheet,
  Navigator,
  Image,
  View
} from 'react-native';

var Digits = require('react-native-fabric-digits');
var { DigitsLoginButton, DigitsLogoutButton } = Digits;
var Contacts = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {

    var AddressBook = require('react-native-addressbook')

    AddressBook.getContacts( (err, contacts) => {
      if(err && err.type === 'permissionDenied'){
      }
      else{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(contacts),
          loaded: true
        });
      }
    });
  },
  renderContact: function(contact) {
      var onPress = function() {
      this.props.navigator.push(
        {name: "alerts", contact: contact}
      );
    }
     return (

         <View style={stylesnight.outline}>
           <View style={stylesnight.cntct}>
           <Text style={stylesnight.contactsText} onPress={onPress.bind(this)}>{contact.firstName.toUpperCase()}</Text>
           </View>
        </View>
      );
    },
    completion: function(error, response) {
      if (error && error.code !== 1) {
        this.setState({ logged: false, error: true, response: {} });
      } else if (response) {
        var logged = JSON.stringify(response) === '{}' ? false : true;


        // this.setState({ logged: logged, error: false, response: response });
        if (logged) {
          this.props.callback();
        } else {
          this.props.navigator.immediatelyResetRouteStack([
            {name: "login"}
          ]);
        }
      }
    },

    render() {
      console.log("Rendering contacts")
      return (
        <Image source={require('./img/midnight.png')} style={{width: 375, height: 700}}>
        <DigitsLogoutButton
          completion={this.completion}
          text="LOGOUT"
          buttonStyle={stylesnight.DigitsAuthenticateButton}
          textStyle={stylesnight.DigitsAuthenticateButtonText}/>
        <View style={stylesnight.container}>

        <Text style={stylesnight.header}>CONTACTS</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderContact}
          />
        </View>

        </Image>);
      }
    });


  var stylesnight = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
    // overflow: "hidden"
  },
  header: {
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 35,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 40,
  marginBottom: 40
  },

  cntct: {
  alignItems: 'center',
  justifyContent: 'center',
  },

  contactsText: {
  marginTop: 10,
  marginBottom: 10,
  fontSize: 20,
  color: '#586675',
  justifyContent: 'center',
  alignItems: 'center'
  },

  outline: {
  borderColor: '#586776',
  borderWidth: 2,
  borderRadius: 15,
  width: 320,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,

  },
  DigitsAuthenticateButton: {
  borderColor: '#586776',
  borderWidth: 2,
  height: 30,
  width: 70,
  justifyContent: 'center',
  borderRadius: 5,
  marginLeft: 275,
  marginTop: 15,

  },
  DigitsAuthenticateButtonText: {
  fontSize: 13,
  color: '#586776',
  alignSelf: 'center',
  }
});


var stylesday = StyleSheet.create({

  header: {
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 35,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 40,
  marginBottom: 40
  },

  cntct: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  },

  contactsText: {
  justifyContent: 'center',
  fontSize: 20,
  color: '#586675',
  alignItems: 'center'
  },

  outline: {
  borderColor: '#586776',
  borderWidth: 2,
  borderRadius: 15,
  width: 360,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  }

});


module.exports = Contacts;
