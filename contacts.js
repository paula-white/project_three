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

         <View style={[styles.header, styles.outline]}>
           <View style={styles.cntct}>
           <Text style={styles.contactsText} onPress={onPress.bind(this)}>{contact.firstName.toUpperCase()}</Text>
           </View>
        </View>
      );
    },

    render() {
      console.log("Rendering contacts")
      return (
        <View style={styles.container}>
        <Text>Contacts</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderContact}
        />
      </View>);
      }
    });

var styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: 20
 // 	 justifyContent: 'space-around',
  //  alignItems: 'center'
  },

  cntct: {
  alignItems: 'center',
  justifyContent: 'center'
  },

  contactsText: {
  marginTop: 30,
  fontSize: 20,
  color: '#586675',
  alignItems: 'center'
  },

  header: {
  flex: 1,

  },

  body: {
  flex: 1,
  },

  outline: {
  borderColor: '#586776',
  borderWidth: 2,
  borderRadius: 15
  }

});


module.exports = Contacts;
