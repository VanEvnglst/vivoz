import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from './swiper';
import OnboardingStep1 from './onboarding-1';
import OnboardingStep2 from './onboarding-2';
import OnboardingStep3 from './onboarding-3';

const OnboardingScreen = () => {
   return (
     <Swiper>
      <OnboardingStep1/>
      <OnboardingStep2/>
      <OnboardingStep3/>
     </Swiper>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

