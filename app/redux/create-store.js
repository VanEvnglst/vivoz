// import { applyMiddleware, compose, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { persistReducer, persistStore, autoMergeLevel2 } from 'redux-persist'
// import AsyncStorage from '@react-native-community/async-storage';
// import immutableTransform from 'redux-persist-transform-immutable';


// const persistConfig = {
//   transforms: [
//     immutableTransform(),
//   ],
//   key: 'root',
//   storage: AsyncStorage,
//   debug: true,
//   stateReconciler: autoMergeLevel2,
//   /**
//    * Blacklist state that we do not need/want to persist
//    */
//   blacklist: [],
// }

// export default (rootReducer, rootSaga) => {
//   //console.warn(rootReducer);
//   const middleware = []
//   const enhancers = []

//   // Connect the sagas to the redux store
//   const sagaMiddleware = createSagaMiddleware()
//   middleware.push(sagaMiddleware)

//   enhancers.push(applyMiddleware(...middleware))

//   // Redux persist
//   const persistedReducer = persistReducer(persistConfig, rootReducer)

//   let store = null;
//   if (window.__REDUX_DEVTOOLS_EXTENSION__) {
//     // add redux devtools extension if present
//     store = createStore(
//       persistedReducer,
//       compose(
//         ...enhancers,
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//       )
//     );
//   } else {
//     store = createStore(persistedReducer, compose(...enhancers));
//   }

//   const persistor = persistStore(store)

//   // Kick off the root saga
//   sagaMiddleware.run(rootSaga)

//   return { store, persistor }
// }

