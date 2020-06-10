import { combineReducers } from 'redux'
import configureStore from './create-store'
import rootSaga from '../sagas';
import { reducer as authentication } from './authentication';

export const mainReducer = combineReducers({
  authentication,
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