import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


const Button = props => {

  const { text, buttonStyle, textStyle } = props;
  return(
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      onPress={() => alert('button pressed')}
    >
      <View style={styles.button}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}


export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'red',
    width: '80%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  }
})