/* eslint-disable no-debugger */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

const checkInPassengerReducer = (state = initialState.passengers, action) => {
  debugger;
  switch (action.type) {
    case types.CREATE_CHECKIN_PASSENGER_SUCCESS:
      return [
        ...state,
        {
          ...action
        }
      ];

    case types.UPDATE_CHECKIN_PASSENGER_SUCCESS:
      return state.map((checkInPassenger) =>
        checkInPassenger.id === action.payload.id ? action.payload : checkInPassenger
      );

    case types.LOAD_CHECKIN_PASSENGERS_SUCCESS:
      debugger;
      return action.payload;

    case types.DELETE_CHECKIN_PASSENGER_OPTIMISTIC:
      return state.filter((checkInPassenger) => checkInPassenger.id !== action.payload.id);

    default:
      return state;
  }
};

export default checkInPassengerReducer;
