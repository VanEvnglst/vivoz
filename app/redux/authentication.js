import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  isLoggedIn: false,
  fetchingAuth: false,
  accessToken: null,
  signInError: '',
});

const { Types, Creators } = createActions({
  signInUser: ['data'],
  signOutUser: [''],
  userLogged: null,
  signInUserFail: ['signInError'],
  signInUserSuccess: null,
  resetError: null,
  resetLoading: null,
});

export const AuthenticationTypes = Types;
export default Creators;

const signInUserSuccess = state => state.merge({ fetchingAuth: false });
const signInUserFail = (state, { signInError }) =>
  state.merge({ fetchingAuth: false, signInError });
const userLogged = state => state.merge({ isLoggedIn: true });

const signInUser = state => state.merge({ fetchingAuth: true });
const signOutUser = state => state.merge({ ...INITIAL_STATE });

const resetError = state => state.merge({ signInError: INITIAL_STATE.get('signInError')});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_USER]: signInUser,
  [Types.SIGN_OUT_USER]: signOutUser,
  [Types.USER_LOGGED]: userLogged,
  [Types.SIGN_IN_USER_SUCCESS]: signInUserSuccess,
  [Types.SIGN_IN_USER_FAIL]: signInUserFail,
  [Types.RESET_ERROR]: resetError,
});
