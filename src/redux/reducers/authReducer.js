import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function authReducer(state = initialState, { type, payload = null }) {
  switch (type) {
    case types.LOGIN_SUCCESS: // "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        users: payload
      };
    case types.LOGOUT_SUCCESS: // "LOGOUT_SUCCESS":
      return {
        ...state,
        isAuthenticated: false,
        users: {}
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        users: payload
      };
    default:
      return state;
  }
}
