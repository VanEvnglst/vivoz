import React from 'react';
import { View, Text, TexInput } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// const Login = () => {
//   return(
//     <View>
//       <View>
//         <Text>Login</Text>
//         <Text>Enter your mobile number to login to your account</Text>
//       </View>
//       <View>
//         <Text>Mobile Number</Text>
//         <TextInput
//           placeholder={'Enter your mobile number'}
//         />
//       </View>

//     </View>
//   )
// }


import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';


const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'flex-start' }}>
      <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold'}}>Login</Text>
      <Text style={{ fontSize: 16, color: 'grey', marginTop: 10 }}>Enter your mobile number to login to your account</Text>
      </View>
      <View style={{ flex: 1 ,marginHorizontal: 20,  backgroundColor: 'blue',
        alignItems: 'flex-start' }}>
        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', }}>Mobile Number</Text>

        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', }}>Your Name</Text>
        <Text style={{ marginTop: 15, fontSize: 16, fontWeight: 'bold', }}>Email Address</Text>
      </View>
      <View style={{ flex: 1, marginHorizontal: 20, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
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


export default Login;