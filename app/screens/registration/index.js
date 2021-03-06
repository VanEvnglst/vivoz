import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';


const Registration = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
      <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold'}}>Welcome to vivoz</Text>
      <Text style={{ fontSize: 16, color: 'grey', marginTop: 10 }}>Create your account</Text>
      </View>
      <View style={{ flex: 1 ,marginHorizontal: 20, alignItems: 'flex-start' }}>
        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', }}>Mobile Number</Text>
        <Input
          text='mobile'/>

        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', }}>Your Name</Text>
        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', }}>Email Address</Text>
      </View>
      <View style={{ flex: 1, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Button
          //buttonStyle={styles.button}
          //textStyle={styles.textButton}
          text='Create Account'
          onPress={() => navigation.navigate('Registration Screen')}
        />
        <Text style={{ marginTop: 15, }}>I agree to Terms of Use and Privacy Policy</Text>
      </View>
      <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}}>
        <Text>Already have an account?</Text>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Login</Text>
      </View>
    </View>

  )
}


export default Registration;