//  Most route componenet - focal point of the application
//  Navigator, component stack
//  By default our application should always show signin.js (twitter digits)
//  Pushing (navigating forward) and pooping  (navigating back) views
//  replace the entire view stack after the sign in - immediately reset route stack


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native';

var Login =  require('./login.js')
var Contacts = require('./contacts.js');
var Alerts = require('./alerts.js');

var ROUTES = {
  login: Login,
  contacts: Contacts,
  alerts: Alerts
};


// Have a function that runs every half hour
  // Based on the timestamp that comes from the Geolocation
    // Change the styles on the Navigator



// class MyDigits extends React.Component{
module.exports = React.createClass({
  getInitialState: function() {
    return {navigator: {}};
  },
  componentWillMount: function() {

  },
  loginCallback: function() {
    this.state.navigator.immediatelyResetRouteStack([
      {name: "contacts"}
    ]);
  },
  renderScene(route, navigator) {
    this.state.navigator = navigator;
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} callback={this.loginCallback} contact={route.contact}/>;
  },
  render: function () {
    return (
      <Navigator
        style={styles.container}
         initialRoute={{name: 'login'}}
         renderScene={this.renderScene}
         configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }});

var styles = StyleSheet.create({
  container: {

  }
});
