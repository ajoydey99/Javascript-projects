'use strict';

const bookings = [];

// Default parameter
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 299 * numPassengers,
) {
  // ES5 WAY
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 4);
createBooking('LH123', 5, 500);

// Passing arguments vs reference
// Javascript does not have pass by reference
const flight = 'MH585';
const charlie = {
  name: 'Charlie Cox',
  passport: 45683214,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //copy of original value
  passenger.name = 'Mr. ' + passenger.name; // copying the referece of the object in memory heap
};

checkIn(flight, charlie);
console.log(flight);
console.log(charlie);

//Callback functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
console.log('------------------------------');
transformer('Javascript is the best!', oneWord);

//Functions returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet('Hey');
greetingHey('Alan');
greetingHey('Josh');
greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Magnus');

console.log('--------------------------------------');

// call and apply method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

lufthansa.book(235, 'John Smith');
lufthansa.book(458, 'Kelly Nifer');
console.log(lufthansa.bookings);

// Call Method
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Do not work
// book(568, 'Jenny Miles')

// it will work

book.call(eurowings, 689, 'Jason Roy');
console.log(eurowings);

book.call(lufthansa, 779, 'Jason Roy');
console.log(lufthansa);

// Apply Method
const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'SX',
  bookings: [],
};

book.apply(swiss, [444, 'Lily Sanders']);
console.log(swiss);

// Bind Method
const bookEW = book.bind(eurowings);
bookEW(233, 'Will Smith');

const bookSX = book.bind(swiss, 663);
bookSX('Cathy Lush');
bookSX('Matt Henry');

// bind method returns the function
// example with event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(564));

const calcTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const newVAT = calcTax(0.23);
console.log(newVAT(500));

//////////////////////////////
// Coding Challenge 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)',
    `),
    );
    console.log(answer);

    // register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// Immediately Invoked function expression(IIFE)
(function () {
  console.log('This will never run again');
})();
