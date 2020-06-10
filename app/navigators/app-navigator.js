import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/sign-in';
import OnboardingScreen from '../screens/onboarding/index';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    //initialRouteName='Onboarding Screen'
    >
      <Stack.Screen
        name='Onboarding Screen'
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name='SignIn' component={SignInScreen}/> */}
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;