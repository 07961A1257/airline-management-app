const users = [
  {
    id: '1',
    name: 'John Makarenko',
    age: '25',
    email: 'admin@gmail.com',
    password: 'admin@123',
    isAdmin: true
  },
  {
    id: '2',
    name: 'Sam Jenitial',
    age: '25',
    email: 'user@gmail.com',
    isAdmin: false,
    password: 'user@123'
  }
];

const passengers = [
  {
    name: 'Shradha',
    passport: 'SFSLK232399',
    address: 'Odisha',
    dob: '1996-12-07',
    isInfant: true,
    isWheelChair: false,
    isSpecialMeal: true,
    flight: '1',
    seat: 'S2',
    id: 2,
    createdAt: 1591537068140,
    checkedIn: true
  },
  {
    name: 'Jashmen',
    passport: 'SFLKSFKFJ3939',
    address: 'Bangalore',
    dob: '2022-01-07',
    isInfant: true,
    isWheelChair: false,
    isSpecialMeal: true,
    flight: '1',
    seat: 'BU1',
    id: 2,
    createdAt: 1591537068140,
    checkedIn: true
  },
  {
    name: 'Pushpa',
    passport: '10003',
    address: 'Bangalore',
    dob: '2015-06-25',
    isInfant: false,
    isWheelChair: false,
    isSpecialMeal: true,
    flight: '1',
    seat: 'D1',
    id: 3,
    createdAt: 1591537102167,
    checkedIn: true
  },
  {
    name: 'Jeeva',
    passport: '10004',
    address: 'Chenai',
    dob: '2019-06-13',
    flight: '1',
    isSpecialMeal: true,
    isInfant: false,
    isWheelChair: false,
    seat: 'S2',
    id: 4,
    createdAt: 1591537137376,
    checkedIn: true
  }
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
// eslint-disable-next-line no-undef
module.exports = {
  users,
  passengers
};
