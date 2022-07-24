import * as checkInPassengerAPI from '../../api/checkInPassengerService';
import * as types from '../actions/actionTypes';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadCheckInPassengersSuccess(payload) {
  return {
    type: types.LOAD_CHECKIN_PASSENGERS_SUCCESS,
    payload
  };
}

export function createCheckInPassengerSuccess(payload) {
  return {
    type: types.CREATE_CHECKIN_PASSENGER_SUCCESS,
    payload
  };
}

export function updateCheckInPassengerSuccess(payload) {
  return {
    type: types.UPDATE_CHECKIN_PASSENGER_SUCCESS,
    payload
  };
}

export function deleteCheckInPassengerOptimistic(payload) {
  return {
    type: types.DELETE_CHECKIN_PASSENGER_OPTIMISTIC,
    payload
  };
}

export function loadCheckInPassengers() {
  return function (dispatch) {
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch(beginApiCall());
    return checkInPassengerAPI
      .getCheckInPassengers()
      .then((response) => {
        console.log(response, 'loadCheckInPassengers');
        dispatch(loadCheckInPassengersSuccess(response));
      })
      .catch((error) => {
        console.error('Something went wrong', error);
        dispatch(apiCallError(error));
      });
  };
}

export function saveCheckInPassenger(checkInPassenger) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return checkInPassengerAPI
      .saveCheckInPassenger(checkInPassenger)
      .then((savedCheckInPassenger) => {
        checkInPassenger.id
          ? dispatch(updateCheckInPassengerSuccess(savedCheckInPassenger))
          : dispatch(createCheckInPassengerSuccess(savedCheckInPassenger));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
      });
  };
}

export function deleteCheckInPassenger(checkInPassenger) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    // dispatch(deletePassengerOptimistic(checkInPassenger));
    return checkInPassengerAPI.deleteCheckInPassenger(checkInPassenger.id).then(() => {
      dispatch(deleteCheckInPassengerOptimistic(checkInPassenger));
    });
  };
}
