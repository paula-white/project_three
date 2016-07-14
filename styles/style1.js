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
  borderColor: '#e9a99a',
  borderWidth: 2,
  height: 50,
  width: 100,
  justifyContent: 'center',
  borderRadius: 15,
  marginTop: 20
  },

  buttonText: {
  fontSize:15,
  color: '#e9a99a',
  marginLeft: 20
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
  position: 'absolute',
  left: 5,
  top:5,
  transform: [
   {rotate: '270deg'}
  ],
  },

  alertBox: {
  borderColor: '#5b6284',
  borderWidth: 2,
  height: 200,
  width: 300,
  borderRadius: 15,
  marginTop: 70,
  alignItems: 'center'
  },

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

  alertText: {
  color: '#5b6284',
  fontSize: 20,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
  },

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
  }

});
