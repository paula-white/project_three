import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  emptyView: {
  height: 50,
  width: 100,
  justifyContent: 'center',
  marginTop: 20
  },
  container: {
  // flex: 1,
  // justifyContent:  'center',
  alignItems:'center'
  },

  button: {
  borderColor: '#6ea7da',
  borderWidth: 2,
  height: 50,
  width: 100,
  justifyContent: 'center',
  borderRadius: 15,
  marginTop: 20
  },

  buttonText: {
  fontSize:15,
  color: '#6ea7da',
  marginLeft: 20
  },

  timeCheck: {
  width: 60,
  height: 60,
  backgroundColor: '#6ea7da',
  margin: 15,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  },

  timeBox: {
  marginTop: 100,
  flexDirection: 'row',
  justifyContent:'center',
  alignItems: 'center',
  },

  triangle: {
  borderColor: '#6ea7da',
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderLeftWidth: 8,
  borderRightWidth: 8,
  borderBottomWidth: 16,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#6ea7da',
  position: 'absolute',
  left: 5,
  top:5,
  transform: [
   {rotate: '270deg'}
  ],
  },

  alertBox: {
  borderColor: '#e3ccb6',
  borderWidth: 2,
  height: 200,
  width: 300,
  borderRadius: 15,
  marginTop: 70,
  alignItems: 'center'
  },

  submit: {
  backgroundColor: '#e3ccb6',
  height: 50,
  width: 170,
  justifyContent: 'center',
  borderRadius: 15,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center'
  },

  alertText: {
  color: '#e3ccb6',
  fontSize: 20,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
  },

  submitText: {
  justifyContent: 'center',
  color: '#6ea7da',
  fontSize: 20,
  fontWeight: 'bold',
  alignItems: 'center'
  },

  timeText: {
  color: 'white',
  fontSize: 20,
  },

  inputs: {
  borderColor: '#e3ccb6',
  borderWidth: 2,
  height: 200,
  width: 300,
  borderRadius: 15,
  marginTop: 70,
  color: '#e3ccb6',
  },

});
