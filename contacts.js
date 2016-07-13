import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
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
        // x.x
      }
      else{
        // var fake = [{name: "Someone", number: "123"}, {name: "anotherone", number: "12345"}, {name: "time to bed", number: "98438"}]
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(contacts),
          loaded: true
        });
      }
    });

  },
  onPress: function() {

  },
  renderContact: function(contact) {
     return (
       <View>
         <Text contact_id={contact.recordID} onPress=this.onPress>{contact.firstName}</Text>
       </View>
     );
   },
  render() {
    console.log("Rendering contacts")
    return (<ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderContact}
      />);
  }
});


module.exports = Contacts;
