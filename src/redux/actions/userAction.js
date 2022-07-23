/* eslint-disable no-unused-vars */
import { getUserInformation } from '../../Api/authenticationService';
import { apiCallError } from '../actions/apiStatusActions';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';

export const loadUserDetails = (userId) => {};

const loginUserSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};

const logOutUserSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const signInUser = (user) => (dispatch) => {
  return getUserInformation(user)
    .then((response) => {
      let validState = false;
      if (
        (response.data[0].email === user.email && response.data[0].password === user.password) ||
        user.googleAuth
      ) {
        dispatch(
          loginUserSuccess({
            ...response.data,
            name: user.googleAuth ? user.name : response.data[0].name
          })
        );
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...response.data,
            name: user.googleAuth ? user.name : response.data[0].name
          })
        );
        validState = true;
      }
      return { ...response.data, validState };
    })
    .catch((error) => {
      dispatch(apiCallError(error));
    });
};

export const logOutApp = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch(logOutUserSuccess(null));
};
