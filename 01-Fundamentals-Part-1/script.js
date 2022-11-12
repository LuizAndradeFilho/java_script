/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

//Camel Uppercase (Variaveis com mais de uma palavra, a partir da segunda vai com maiuscula na primeira letra)
let firstName = "Jonas";

// Variaveis que comecam com NUMEROS nao sao permitidas em JS
// let 3Years = 3;
// Nunca comecar com letra maiuscula (convencao, nao ilegal)

// New e Function sao palavras reservadas ao JS

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

// Tudo em maisuclas variaveis fixas que nao mudam seu valor, como exmplo abaixo:
let PI = 3.1415;

// Variaveis sempre descritivas, faceis de entender do que se tratam
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// ----------------------------------------------------------------------------------------------------------------------------------------------------

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);

year = true;
console.log(year);

console.log(typeof null);

//Variaveis que podem ser mudadas ou vazias
let age = 30;
age = 31;
console.log(age);

//Variaveis que nao podem ser mudadas nem vazia
const birthYear = 1991;
console.log(birthYear);
*/

// Math operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 elevado ao cubo (2*2*2)

// const firstName = "Luiz";
// const lastName = "Andrade";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x /= 2;
// x *= 2;
// x++; // x = x + 1 = 101
// x--;
// x--;
// console.log(x);

// // Comparison operators

// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18; // Armazenando um resultado de uma variavel.

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

// //TEST DATA1
// const massMark1 = 78;
// const heightMark1 = 1.69;
// const massJohn1 = 92;
// const heightJohn1 = 1.95;

// const bmiMark1 = massMark1 / heightMark1 ** 2;
// const bmiJohn1 = massJohn1 / heightJohn1 ** 2;
// const markHigherBMI1 = bmiMark1 > bmiJohn1;

// console.log(bmiMark1, bmiJohn1, markHigherBMI1);

// //TEST DATA2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiMark2 = massMark2 / heightMark2 ** 2;
// const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
// const markHigherBMI2 = bmiMark2 > bmiJohn2;

// console.log(bmiMark2, bmiJohn2, markHigherBMI2);

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// const firstName = "Luiz";
// const job = "Web Developper";
// const birthYear = 1980;
// const year = 2022;

// const luiz =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(luiz);

// const luizNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(luizNew);

// console.log(`Just a regullar string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String
// multiple
// line`);

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// const firstName = `Maria`;
// const age = 15;
// const legalAge = age >= 18;

// if (legalAge) {
//   console.log(`${firstName} can start driving license!`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Maria is too young, Wait another ${yearsLeft} years`);
// }

// const birthYear = 2016;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Control Structure
// if(){

// } else {

// }

// const ageOk = 18;
// const bornYear = 1980;
// const yearToday = 2022;
// const result = yearToday - bornYear;

// if (result >= ageOk) {
//   alert(`Congratulations, you can loan a Car with us!`);
// } else {
//   alert(`So Sory, you may have 18 years old...`);
// }

// const check = true;
// const waiting = false;
// let local = "Street";

// if (check) {
//   alert(`Your delivery is already at your ${local}`);
// } else {
//   if (waiting) {
//     alert(`Your delivery ist not ready to delivery`);
//   }
// }

// Coding Challenge #2

//TEST DATA1
// const massMark1 = 78;
// const heightMark1 = 1.69;
// const massJohn1 = 92;
// const heightJohn1 = 1.95;

// const bmiMark1 = massMark1 / heightMark1 ** 2;
// const bmiJohn1 = massJohn1 / heightJohn1 ** 2;
// const markHigherBMI1 = bmiMark1 > bmiJohn1;

// console.log(bmiMark1, bmiJohn1, markHigherBMI1);

// if (bmiMark1 > bmiJohn1) {
//   console.log(`Marks's BMI (${bmiMark1}) is higher than John's (${bmiJohn1}).`);
// } else {
//   console.log(`John's BMI (${bmiJohn1}) is higher than Mark's (${bmiMark1}).`);
// }

// //TEST DATA2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiMark2 = massMark2 / heightMark2 ** 2;
// const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
// const markHigherBMI2 = bmiMark2 > bmiJohn2;

// console.log(bmiMark2, bmiJohn2, markHigherBMI2);

// // ----------------------------------------------------------------------------------------------------------------------------------------------------

//TYPE CONVERSION AND COERCION

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
