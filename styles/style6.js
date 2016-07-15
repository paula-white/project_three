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
width: 150,
justifyContent: 'center',
marginTop: 20,
padding: 10,
},

button: {
borderColor: 'transparent',
borderWidth: 2,
height: 50,
width: 150,
justifyContent: 'center',
borderRadius: 15,
marginTop: 20
},

buttonText: {
fontSize:17,
color: '#6ea7da',
marginLeft: 30,
marginTop: -17
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
transform: [
 {rotate: '270deg'}
],
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
justifyContent: 'center',
alignItems: 'center',
marginLeft: 35,
marginTop: 70,
color: 'white',
padding: 20,
},

});
