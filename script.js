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

// & call, apply and bind ------------------------------------
/*
const avisales = {
  airline: 'Airways',
  airCode: 'Uz',
  bookings: [],

  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.airCode} ${flightNum}`
    );

    this.bookings.push({ flight: `${this.airCode} ${flightNum}`, name });
  },
};

avisales.book(123, 'Tom Jasper');

const humoair = {
  airline: 'Humoair',
  airCode: 'Humo Uz',
  bookings: [],
};

const smiss = {
  airline: 'Smisair',
  airCode: 'Usa',
  bookings: [],
};

// Call method
const book = avisales.book;

console.log(humoair);
book.call(humoair, 124, 'Ann');

// apply method
console.log(smiss);

const flightData = [45, 'David'];
book.apply(smiss, flightData);
// book.call(smiss, ...flightData);

// bind method
const bookBn = book.bind(smiss);
console.log(smiss);
bookBn(44, 'Tom');

avisales.planes = 100;
avisales.planesBuy = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', avisales.planesBuy.bind(avisales));

*/
// &---------practise---------------
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // answers: new Array(4).fill(0),
  answers: [0, 0, 0, 0],

  registerNewAnswer() {
    const answer = +prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.buy')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
*/

// &----------------------IIFE---------
/*
const runOne = () => {
  console.log('This function run more times');
};
runOne();

(function () {
  console.log('This function will never run');
})();
*/
// &----------------------Closure---------
/*
const secureBooking = () => {
  let passangerCont = 0;

  return function () {
    passangerCont++;
    console.log(passangerCont);
  };
};

const booker = secureBooking();
booker();

console.dir(booker);
*/
