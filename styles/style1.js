import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({

  container: {
  flex: 1,
  // justifyContent:  'center',
  alignItems:'center'
  },

  emptyView: {
  height: 50,
  width: 100,
  justifyContent: 'center',
  marginTop: 20,
  padding: 10,
  },

  button: {
  borderColor: '#e9a99a', // transparent
  borderWidth: 2,
  height: 50,
  width: 100,
  justifyContent: 'center',
  borderRadius: 15,
  marginTop: 20
  },

  buttonText: {
  fontSize:17,
  color: '#e9a99a',
  // marginLeft: 30
  },

  timeCheck: {
  width: 60,
  height: 60,
  backgroundColor: '#e9a99a',
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
  borderColor: '#e9a99a',
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderLeftWidth: 8,
  borderRightWidth: 8,
  borderBottomWidth: 16,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#e9a99a',
  transform: [
   {rotate: '270deg'}
  ],
  },

  // alertBox: {
  // borderColor: '#5b6284',
  // borderWidth: 2,
  // height: 200,
  // width: 300,
  // borderRadius: 15,
  // marginTop: 70,
  // alignItems: 'center'
  // },

  submit: {
  backgroundColor: '#937778',
  height: 50,
  width: 170,
  justifyContent: 'center',
  borderRadius: 15,
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center'
  },

  // alertText: {
  // color: '#5b6284',
  // fontSize: 20,
  // justifyContent: 'center',
  // alignItems: 'center',
  // marginTop: 15,
  // },

  submitText: {
  justifyContent: 'center',
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  alignItems: 'center'
  },

  timeText: {
  color: 'white',
  fontSize: 20,
  },

  inputs: {
  borderColor: '#5b6284',
  borderWidth: 2,
  height: 200,
  width: 300,
  borderRadius: 15,
  marginTop: 70,
  color: 'white',
  padding: 20,
  },

  });
