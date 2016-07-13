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
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([{name: "Someone", number: "123"}, {name: "anotherone", number: "12345"}, {name: "time to bed", number: "98438"}]),
        loaded: true
      })
  },
  renderContact: function(contact) {
     return (
       <View>
         <Text>{contact.name}</Text>
         <Text>{contact.number}</Text>
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
