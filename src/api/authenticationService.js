import Axios from '../config/api.config';

export const getUserDetails = (userId) => {
  return Axios.get('/users/' + userId);
};

export const getUserInformation = async (user) => {
  const response = await Axios.get('/users', {
    params: {
      ...user
    }
  });
  return response;
};
