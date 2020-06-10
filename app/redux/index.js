import { combineReducers } from 'redux'
import configureStore from './create-store'
import rootSaga from '../sagas';
import { reducer as authentication } from './authentication';

// export default () => {
//   const rootReducer = (state, action) => combineReducers({
//     /**
//      * Register your reducers here.
//      * @see https://redux.js.org/api-reference/combinereducers
//      */
//     //example: ExampleReducer,
//   })
//   console.log('here', rootReducer);
  
//   return configureStore(rootReducer, rootSaga)
// }


export const mainReducer = combineReducers({
  authentication,
  // user: userReducer,
  // stream: streamReducer,
  // menu: menuReducer,
  // newSchedule: newScheduleReducer,
  // modal: modalReducer,
  // search: searchReducer,
  // artist: artistReducer,
});

export default () => {
  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
      state = undefined
    }
    return mainReducer(state, action)
  }
  return configureStore(rootReducer, rootSaga)
}