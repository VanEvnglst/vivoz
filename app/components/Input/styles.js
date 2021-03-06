import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const inputWidth = '100%';
const inputHeight = 62;


export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
  },
  input: {
    width: inputWidth,
    height: inputHeight,
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    fontSize: 14,
    color: 'black'
  },
  focusedStyle: {
     borderColor: 'red',
     borderWidth: 1,
  },
  unfocusedStyle: {
    borderColor: 'grey',
    borderWidth: 1,
  },
})