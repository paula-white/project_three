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
var TimerMixin = require('react-timer-mixin');
var Login =  require('./login.js')
var Contacts = require('./contacts.js');
var Alerts = require('./alerts.js');

var ROUTES = {
  login: Login,
  contacts: Contacts,
  alerts: Alerts
};


// Have a function that runs every hour
  // Based on the timestamp that comes from the Geolocation
    // Change the styles on the Navigator
    // var time = new Date(TimeStamp);
    // var hours = time.getHours(),

// var hours = function () {
//
//
// };


// class MyDigits extends React.Component{
module.exports = React.createClass({
  mixins: [TimerMixin],
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
  },
  componentDidMount: function() {
    this.setInterval( () => {
       let d = new Date();
      //  When the timestamp = 8pm, change the style.container state to class Nightime
      //  When the timestamp = 8am, change the style.container state to class daytime
      if (d.getHours() > 8 && d.getHours() <= 20) {

      } else if (d.getHours() > 20 || d.getHours() <= 8) {

      }
    }, 1000 * 60 * 60);
  }
}
);

var styles = StyleSheet.create({
  container: {

  }
});
