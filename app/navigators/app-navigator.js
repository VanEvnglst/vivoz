import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/onboarding/index';
import RegistrationScreen from '../screens/registration/index';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Onboarding Screen'
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Registration Screen'
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name='SignIn' component={SignInScreen}/> */}
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;