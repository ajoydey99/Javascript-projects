'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 Enhanced object literals
  openingHours,

  //ES6 New function expression
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  address: {
    city: 'New York',
    zip: '10001',
  },
};
console.log(restaurant);
// destructuring an array
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// skip an array value
[main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a funcrion
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default array values
const [a = 1, b = 1, c = 1] = [8, 9];
console.log(a, b, c);

console.log('---------------------------------');

// destructuring objects
const { name, categories } = restaurant;
console.log(name, categories);

// naming destructured objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let x = 111;
let y = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a: x, b: y } = obj); //destructuring assignment

console.log(x, y);

// Nested objects
const {
  fri: { open: op, close: cl },
} = openingHours;

console.log(op, cl);

console.log('---------------------------------');

// spread operator
const arr = [77, 551, 99];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);

// copy and merge 2 array
const arr1 = [5, 2, 6];
const arr2 = [88, 'fdf', true];

const copyArr = [...arr2];
console.log(copyArr);

const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);

// Iterables are arrays, strings, maps, sets not objects
// spread operator only works in function arguments or building new arrays

const ingredients = ['Tomato sauce', 'Toppings', 'Chili flex'];
restaurant.orderPasta(...ingredients);

// shallow copy of objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'xyz' };
console.log(newRestaurant);

// Changing a top-level primitive property in shallowCopy (does NOT affect original)
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Changing a property within a nested object in shallowCopy (DOES affect original)
restaurantCopy.address.city = 'London';
console.log(restaurantCopy.address.city);
console.log(restaurant.address.city);

console.log('---------------------------------');

// REST pattern (spread operator on left side)
const [m, n, ...otherIndex] = [11, 22, 2, 25, 45, 88];
console.log(otherIndex);

// REST pattern should always be the last array element
// there should only be one rest element while destructuring
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// object destructuring
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// function arguments using REST param
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(2, 3);
add(2, 5, 3, 44);
add(2, 3, 5, 3, 45, 6, 6);

// using spread param
const p = [22, 56, 33];
add(...p);

console.log('---------------------------------');

// OR operator can be used with any data type,
// return any data type and can be used for short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Alex');
console.log(true || 0);
console.log(undefined || null);

// AND short-circuiting
console.log(0 && 'Monday'); // 1st value false, returns 0
console.log(7 && 'Monday'); // 1st value true so returns 2nd true

console.log('---------------------------------');

// NULL COALESCING Operator
// Nullish values are null and undefined (Not 0 or '')
let guests = restaurant.numGuests ?? 10;
console.log(guests); // output 10

restaurant.numGuests = 0;
guests = restaurant.numGuests ?? 10;
console.log(guests); // output 0

// Logical assignment operator
// logical nulllish assignment operator
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

rest1.numGuests ??= 10;
console.log(rest1);

// OR Assignment operator
const rest2 = {
  name: 'La Piazza',
  owner: 'Jack Smith',
};

rest2.numGuests ||= 10;
console.log(rest2);

// AND assignment operator
rest2.owner &&= '<ANONYMOUS>';
console.log(rest2);

console.log('---------------------------------');

/////////////////////////////////////////////////////
// for-of loop
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menus) console.log(item);

// for-of indexed array output
for (const item of menus.entries()) console.log(item);

// for-of destructuring array
for (const [i, el] of menus.entries()) {
  console.log(`${i + 1} : ${el}`);
}

console.log('---------------------------------');

// Optional Chaining concept
// without optional chaining
if (restaurant.openingHours && restaurant.mon)
  console.log(restaurant.openingHours);

// with optional chaining operator
console.log(restaurant.openingHours.mon?.open);

// multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`on ${day}, we open at ${open}`);
}

// method checking with optional chaining
console.log(restaurant.orderBurger?.(0, 1) ?? "Method doesn't exist");

// Optional chaining with arrays
const users = [{ name: 'Jones', email: 'eli@gmail.com' }];

console.log(users[1]?.name ?? 'User array empty');

console.log('---------------------------------');

// object property/keys iteration without loop
const properties = Object.keys(openingHours);
console.log(properties);
const values = Object.values(openingHours);
console.log(values);

console.log(`We are open on ${properties.length} days`);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// loop over object using entries()
const entries = Object.entries(openingHours);
console.log(entries);

// loop over object using entries() and object destructuring
for (const [key, { open, close }] of entries) {
  // output each entry
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

console.log('---------------------------------');

// Sets in js
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); // output pasta, pizza, risotto
console.log(orderSet.size); // size of set
console.log(orderSet.has('Bread')); // return true or false
orderSet.add('Garlic Bread'); // adds new element
orderSet.add('Garlic Bread'); // same value ignored
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
// orderSet.clear();

// in set there are no indexes
// there is no need to retrieve values from set
// if you need values then use array
// there is no duplicate values in sets

// Sets are also iterable
for (const order of orderSet) console.log(order);

// conversion from set to array
const orderArray = [...orderSet];
console.log(orderArray);

// sets also works with string
const nameStr = new Set('Jacky');
console.log(nameStr, nameStr.size);

console.log('---------------------------------');

// Maps in js
// Maps are key-value paired
// in maps keys can be any data type unlike objects(where keys are string value)

const rest = new Map();
rest.set('name', 'Arsalan');
rest.set(1, 'Kolkata');
rest.set(2, 'Mumbai');

// set method also returns the updated map
console.log(rest.set(3, 'Pune'));

// set method chaining on Map
rest
  .set('categories', ['Rolls', 'Biriyani', 'Kebab'])
  .set('open', 11)
  .set('close', 20)
  .set(true, 'Opening :)')
  .set(false, 'Closing :(');

// while output map we have to put exact data type in key
console.log(rest.get('categories'));
console.log(rest.get(true));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear() deletes whole map

// using array object as map key
const arrNew = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr));

// Convert object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Map Iteration
// quiz app
const quiz = new Map([
  ['question', 'Which is the largest planet?'],
  [1, 'Earth'],
  [2, 'Mercury'],
  [3, 'Jupiter'],
  ['correct', 3],
  [true, 'Correct answer'],
  [false, 'Try Again'],
]);
console.log(quiz);

console.log(quiz.get('question'));
//no need of entries method
for (const [key, value] of quiz) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
console.log(`Your answer is: ${answer}`);

console.log(quiz.get(quiz.get('correct') === answer));

// Convert map to array
console.log([...quiz]);
console.log([...quiz.keys()]);
console.log([...quiz.values()]);

console.log('---------------------------------');

// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Priscic'];
console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
console.log('---------------------------------');
// Coding challenge #2
//1. we can use .entries method on array
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2. we have to pass object to entries method
let avg = 0;
const odds = Object.values(game.odds);
for (const odd of odds) avg += odd;

avg /= odds.length;
console.log(avg);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odd of ${teamStr} ${odd}`);
}

console.log('---------------------------------');

// Coding challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(`last event was in ${time} minutes.`);

// 4.
for (const [k, v] of gameEvents) {
  const half = k <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${k}: ${v}`);
}

console.log('---------------------------------');

////////////////////////////////////////////////////

// Working with Strings
// when we call method on strings js automatically bts convert string primitive to object
const airline = 'AIR India 370';
const plane = 'B768';

console.log(plane[2]);
console.log('A563'[0]);

console.log(airline.length);
console.log(plane.indexOf('8'));
console.log(airline.lastIndexOf('a')); //case sensitive
console.log(airline.indexOf('370')); // if not found returns -1

console.log(airline.slice(4)); // sub-string: slice(start,end)
console.log(airline.slice(4, 9)); // 9-4 = 5(India)
console.log(airline.slice(airline.indexOf('A'), airline.lastIndexOf(' ')));
console.log(plane.slice(-2)); // start from last index
console.log(plane.slice(1, -1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('  HEllo!!'.trim().toLowerCase());

const cash = '443.44$';
console.log(cash.replace('$', '₹').replace('4', '6')); // only replace first occurence
console.log(cash.replace(/4/g, '6')); // replace all occurence with the help of regex

console.log(plane.includes('B')); // true
console.log(airline.startsWith('ai')); // false
console.log(airline.endsWith('370')); // true

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Jack Ryan'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', 'Victor', 'Von', 'Doom'].join(' ');
console.log(newName);

// first letter of name is capital letter
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('mohan das karam chand gandhi');

// padding concept of string
const myName = 'Alison';
console.log(myName.padStart(15, '+'));
console.log(myName.padEnd(15, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // convert number to string
  const lastFourDigit = str.slice(-4);
  return lastFourDigit.padStart(str.length, '*');
};
console.log(maskCreditCard(343426565656));
console.log(maskCreditCard('343462467755555'));

console.log('Mayday... '.repeat(5));

console.log('---------------------------------');

// Coding challenge #4
// My Solution
const toCamelCase = function (...items) {
  let i = 1;
  for (const item of items) {
    const values = item.toLowerCase().trim().split('_');
    let str = values[0] + values[1][0].toUpperCase() + values[1].slice(1);
    str = str.padEnd(20, ' ');
    console.log(str + '✅'.repeat(i++));
  }
};
toCamelCase(
  'underscore_case ',
  '  first_name ',
  'Some_Variable  ',
  'calculate_AGE ',
  '  delayed_departure  '
);

console.log('---------------------------------');

// Jonas Solution
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

console.log('---------------------------------');

// BONUS Challenge
const flightsDetails =
  '_Delayed_Departure;fao93755109;txl213375840;11:25+_Arrival;bru0943383722;fao93766109;11:45+_Delayed_Arrival;hel743894875;fao9386553;12:05+_Departure;fao9324820;lis232344334;12:30';

// OUTPUT
// 🔼 Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45)
//   🔼  Delayed Arrival from HEL to FAO (12h05)
//              Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flightsDetails.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔼' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    40
  );
  console.log(output);
}
