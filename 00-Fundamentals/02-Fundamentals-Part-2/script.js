"use strict";

// FUNCTION DECLARATION
function addition(n1, n2) {
  return n1 + n2;
}

console.log(addition(89, 55));

//FUNCTION EXPRESSION
const addition2 = function (n1, n2) {
  return n1 + n2;
};

console.log(addition2(47, 25));

//ARROW FUNCTION
const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(1996);
console.log(age);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  return `${firstName} retires in ${65 - age}`;
};

console.log(yearUntilRetirement(1996, "Ajoy"));

//Coding Challenge #1
// const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No Teams Wins!");
//   }
// };

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);

const city = ["Kolkata", "Mumbai", "Goa"];

//Add elements

const newLength = city.push("Delhi");
console.log(city, newLength);

city.unshift("Patna");
console.log(city);

//Remove elements
let removed = city.pop();
console.log(city);
console.log(`Removed element ${removed}`);

removed = city.shift();
console.log(city);

//index check
console.log(city.indexOf("Goa"));
console.log(city.includes("Goa")); //strict type check

//Coding challenge #2
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// objects key-value

const alan = {
  firstName: "Alan",
  lastName: "Walker",
  birthYear: 1991,
  job: "DJ",
  friends: ["Smith", "Kyle", "Mike"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    const msg = `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    return msg;
  },
};

console.log(alan.lastName, alan["job"]);

//add object property
alan["location"] = "USA";
alan.city = "California";

console.log(alan);
console.log(
  `${alan.firstName} has ${alan["friends"].length} friends, and his best friend is called ${alan.friends[2]}.`
);

console.log(alan.calcAge());
console.log(alan.age);
console.log(alan.getSummary());

// Coding Challenge #3
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.firstName}'s BMI(${mark.bmi.toFixed(2)}) is higher than ${
//       john.firstName
//     }'s (${john.bmi.toFixed(2)})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.firstName}'s BMI(${john.bmi.toFixed(2)}) is higher than ${
//       mark.firstName
//     }'s (${mark.bmi.toFixed(2)})`
//   );
// }

const alanArray = [
  "Alan",
  "Walker",
  2037 - 1994,
  "DJ",
  ["Michael", "Peter", "Smith"],
  true,
];

for (let i = 0; i < alanArray.length; i++) {
  if (typeof alanArray[i] !== "string") continue;
  console.log(alanArray[i], typeof alanArray[i]);
  break;
}

//reverse array
for (let i = alanArray.length - 1; i >= 0; i--) {
  console.log(i, alanArray[i]);
}

//nested loops
// for (let ex = 1; ex < 4; ex++) {
//   console.log(`-----exercise ${ex}`);
//   for (let rep = 1; rep <= 3; rep++) {
//     console.log(`Repetition no ${rep}`);
//   }
// }

let dice = Math.floor(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`Dice no: ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if (dice == 6) console.log("Loop is ending..");
// }

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

// Bonus challenge
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage(totals));

// Debugging Coding Challenge
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - what is the X days? Answer: index+1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each elements to string with °C
// - Strings needs to contain day (index+1)
// - add .... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C ...`);

const printForecast = function (arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ...`;
    console.log(str);
  }
};

printForecast(data1);
