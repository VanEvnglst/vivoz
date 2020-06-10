import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
// import createStore from './redux/CreateStore';
import RootScreen from './screens/root-screen';

// const { store, persistor } = createStore();


const App = () => {
  return(
    // <Provider store={store}>
      // <PersistGate loading={null} persistor={persistor}>
        <RootScreen/>
      // </PersistGate>
  //   </Provider>
  )
};

export default App;
