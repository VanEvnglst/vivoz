import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Images } from '../../theme';
import Button from '../../components/Button';

const OnboardingStep3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.header}>HELLO</Text>
   <Text style={styles.text}>This is the start of testing</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'red' }} />
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          textStyle={styles.textButton}
          text='Create Account'
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ marginRight: 5 }}> Already have an account?</Text>
          <Text style={{ fontWeight: 'bold'}}>Login</Text>
        </View>
              
      </View>
      {/* <Image source={require('../assets/images/splash_img1-1@2x.png')} style={{ width: 80, height: 80 }}/> */}
   
 </View>
  )
}

export default OnboardingStep3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    color: 'red',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15
  },
  text: {
    color: 'red',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center'
  },
  buttonStyle: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red'
  },
  textButton: {
    color: 'white',
    fontSize: 18
  }
});