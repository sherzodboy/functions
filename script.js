'use strict';

// ^ ------------------------- Default parametrs-----------------

/*
const bookings = [];

const creatingBook = (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) => {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

creatingBook('LH123');
creatingBook('LH123', undefined, 10000);
*/

// ^ ------------------------------------------------------
/*
const flight = 'LH123';

const tom = {
  name: 'Tom jasper',
  passport: 12345678,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH124';

  if (passenger.passport === 12345678) {
    alert('Checked true');
  } else {
    alert('False');
  }
};

// is the same as
// const flightNum = flight;
// const passenger = tom;

// checkIn(flight, tom);
// console.log(flight);
// console.log(tom);

const newPassenger = (person) => {
  person.passport = 123456789;
};

newPassenger(tom);
checkIn(flight, tom);
*/
// ^ ------------------------------------------------------

/*
const oneWord = (str) => {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = (str) => {
  const [frist, ...others] = str.split(' ');
  return [frist.toUpperCase(), ...others].join(' ');
};

// Higher order functons

const transformat = (str, fn) => {
  console.log(`Original str: ${str}`);
  console.log(`transformed str: ${fn(str)}`);

  console.log(fn.name);
};
// callback is more useful in js
transformat('javascript is best language!', oneWord);
transformat('javascript is best language!', upperFirstWord);
*/
// ^ ------------------------------------------------------
/*
const greet = (greeting) => {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greetingHey = greet('hello');
// greetingHey('Bob');
// greetingHey('Ann');

greet('Hi')('David');
*/
