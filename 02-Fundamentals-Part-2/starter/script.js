"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;

// --------------------------------------------

// function logger() {
//   console.log("My name is Luiz");
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// --------------------------------------------

// function calcAge1(birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// }

// or;

//Function Delcaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// --------------------------------------------

//Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// Arrow Function
// const calAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calAge3(1980);
// console.log(age3);

// const yearsuntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsuntilRetirement(1980, `Luiz`));
// console.log(yearsuntilRetirement(1984, `Momo`));
// console.log(yearsuntilRetirement(2016, `Birua`));

// --------------------------------------------

// function cutFruitPiecesApple(fruit) {
//   return fruit * 10;
// }
// function cutFruitPiecesOrange(fruit) {
//   return fruit * 6;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPiecesApple(apples);
//   const orangePieces = cutFruitPiecesOrange(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// --------------------------------------------

const yearsuntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
