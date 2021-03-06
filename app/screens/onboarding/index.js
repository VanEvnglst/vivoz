import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from './swiper';
import OnboardingStep from './onboarding-step';

const OnboardingScreen = props => {
  console.warn('woop', props);
  const { navigation } = props;
  return (
     <Swiper>
      <OnboardingStep
        title={'Live Selling'}
        subtext={'Vestibulum ac diam sit amet quam vehicula eget tincidunt '}
        navigation={navigation} 
      />
      <OnboardingStep
        title={'About Safe Shopping'}
        subtext={'Vestibulum ac diam sit amet quam vehicula eget tincidunt '}/>
      <OnboardingStep
        title={'Another Value Prop'}
        subtext={'Vestibulum ac diam sit amet quam vehicula eget tincidunt '}/>
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

