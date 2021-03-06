import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Input extends Component {
  state = {
    text,
    isFocused: false,
  };

  render() {
    const {
      type,
      enable,
      placeholder,
      textAreaMode,
      onChangeText,
      label,
      required,
    } = this.props;
    const { isFocused, text } = this.state;

    return (
      <View
        style={[ styles.input, isFocused && styles.focusedStyle ]}
      >
        <TextInput
          value={text}
          secureTextEntry={type === 'password'}
          keyboardType={type === 'number' ? 'phone-pad' : 'default'}
          onChangeText={text => onChangeText(text.replace(/^\s+/g, ''))}
          onBlur={() => {
            this.props.onBlur(text);
            this.setState({ isFocused: false });
          }}
          onFocus={() => this.setState({ isFocused: true })}
        />
      </View>
    )
  }
}

export default Input;