import Axios from '../config/api.config';
//import { handleResponse, handleError } from './apiUtils';
export const getAllPassengerList = () => Axios.get('passengers');

// export const getAllPassengerListByFlight = (id) =>
//   Axios.get(`passengers/${id}`).then(handleResponse).catch(handleError);

export const savePassengerDetails = (passenger) => {
  if (passenger.id) {
    return Axios.put('passengers/' + passenger.id, passenger);
  } else {
    return Axios.post('passengers', passenger);
  }
};

export const deletePassengerById = (passengerId) => {
  return Axios.delete('passengers/' + passengerId);
};
