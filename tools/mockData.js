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
    name: 'Chaitanya',
    passport: 'SFSLK232399',
    address: 'Hyderabad',
    dob: '1990-29-05',
    isInfant: true,
    isWheelChair: false,
    isSpecialMeal: true,
    flight: '1',
    seat: 'S2',
    id: 1,
    createdAt: 1591537068140,
    checkedIn: true
  },
  {
    name: 'Jasmin',
    passport: 'SFLKSFKFJ3939',
    address: 'Bangalore',
    dob: '1990-01-07',
    isInfant: false,
    isWheelChair: false,
    isSpecialMeal: true,
    flight: '1',
    seat: 'S1',
    id: 2,
    createdAt: 1591537068140,
    checkedIn: false
  },
  {
    name: 'Chanakya',
    passport: 'SFSLK232386',
    address: 'New Delhi',
    dob: '1993-12-06',
    isInfant: false,
    isWheelChair: false,
    isSpecialMeal: true,
    flight: '2',
    seat: 'S1',
    id: 3,
    createdAt: 1591537102167,
    checkedIn: true
  },
  {
    name: 'Jyothi',
    passport: 'DFSLK232686',
    address: 'Varanasi',
    dob: '2000-06-13',
    flight: '3',
    isSpecialMeal: true,
    isInfant: false,
    isWheelChair: false,
    seat: 'S2',
    id: 4,
    createdAt: 1591537137376,
    checkedIn: true
  },
  {
    name: 'Lalitha',
    passport: 'GFSLP232686',
    address: 'Mumbai',
    dob: '1993-04-19',
    flight: '4',
    isSpecialMeal: true,
    isInfant: false,
    isWheelChair: false,
    seat: 'S2',
    id: 5,
    createdAt: 1591537137376,
    checkedIn: true
  }
];

const ancillaryServices = [
  {
    flight: 1,
    service: 'Special Meal',
    id: 1,
    type: '1'
  },
  {
    flight: 1,
    service: 'Shopping Item 1',
    id: 2,
    type: '2'
  },
  {
    flight: 1,
    service: 'Shopping Item 2',
    id: 3,
    type: '2'
  }
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
// eslint-disable-next-line no-undef
module.exports = {
  users,
  passengers,
  ancillaryServices
};
