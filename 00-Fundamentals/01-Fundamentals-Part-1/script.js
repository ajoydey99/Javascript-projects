/*let js = "amazing";

console.log(40 + 8 + 23 - 10);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);

javascriptIsFun = null;
console.log(typeof javascriptIsFun);

const setYear = 2037;
const ageJonas = setYear - 1991;
const ageSarah = setYear - 2018;
console.log(ageJonas, ageSarah);

const firstName = "Ajoy";
const lastName = "Dey";
console.log(firstName + " " + lastName);

// Coding Challenge #1
let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//Coding Challenge #2
if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      1
    )}) is higher than John's (${johnBMI.toFixed(1)})!`
  );
} else {
  console.log(
    `John's (${johnBMI.toFixed(
      1
    )}) BMI is higher than Mark's (${markBMI.toFixed(1)})!`
  );
}

markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//Coding Challenge #2
if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      1
    )}) is higher than John's (${johnBMI.toFixed(1)})!`
  );
} else {
  console.log(
    `John's (${johnBMI.toFixed(
      1
    )}) BMI is higher than Mark's (${markBMI.toFixed(1)})!`
  );
}

const name = "Ajoy";
const job = "Developer";
const birthYear = 1991;
const year = 2037;

//template string
const msg = `I'm ${name}, 
a ${year - birthYear} year old ${job}.`;
console.log(msg);

const favNum = Number(prompt("What is your favourite number?"));
console.log(favNum, typeof favNum);

if (favNum === 23) {
  console.log(`Answer is ${favNum}`);
} else console.log("other number");
*/

//Challenge #3
/* const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;
const minScore = 100;

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Winner is Dolphins");
} else if (avgKoalas > avgDolphins && avgDolphins >= 100) {
  console.log("Winner is Koalas");
} else if (
  avgDolphins === avgDolphins &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("Both wins");
} else {
  console.log("No one wins");
} */

/* const day = "friday";

switch (day) {
  case "monday":
    console.log("Start of the week");
    break;
  case "tuesday":
  case "wednesday":
    console.log("work continues");
    break;
  case "friday":
    console.log("last day of work");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend😊");
  default:
    console.log("not a valid day");
}
 */

// Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
