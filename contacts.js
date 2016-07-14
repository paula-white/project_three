import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  StyleSheet,
  Image,
  View
} from 'react-native';

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

    render() {
      console.log("Rendering contacts")
      return (

        <Image source={require('./img/midnight.png')} style={{width: 400, height: 700}}>
        <Text style={stylesnight.header}>CONTACTS</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderContact}
          />

        </Image>);
      }
    });

var stylesnight = StyleSheet.create({

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
  marginTop: 30,
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
  marginTop: 10,
  }

});

var stylesday = StyleSheet.create({

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
  marginTop: 30,
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
  marginTop: 10,
  }

});


module.exports = Contacts;
