var React = require('react');
var ReactNative = require('react-native');
var requireNativeComponent = ReactNative.requireNativeComponent;
var StyleSheet = ReactNative.StyleSheet;
var DGTAuthenticateButtonView = requireNativeComponent("DGTAuthenticateButtonView", DGTAuthenticateButtonView);

const styles = StyleSheet.create({
  DigitsAuthenticateButton: {
    height: 50,
    width: 230,
    backgroundColor: 'black'
  }
});

var DigitsAuthenticateButton = React.createClass({
   render: function() {
      return (
         <DGTAuthenticateButtonView
          style={styles.DigitsAuthenticateButton} />
      );
   }
});
module.exports = DigitsAuthenticateButton;
