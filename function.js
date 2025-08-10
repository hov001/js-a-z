// const numbers = [1, 2, 5, 7, 8];
// const number = 8;

// // parameters
// function findIndex(a = [], b = 0) {
//   let foundIndex = -1;

//   for (let idx = 0; idx < a.length; idx++) {
//     if (a[idx] === b) {
//       foundIndex = idx;
//       break;
//     }
//   }

//   if (foundIndex === -1) return "I cannot find item";

//   return foundIndex;
// }

// const blaBla = findIndex(numbers, number); // 4

// console.log(blaBla);

// res1 // [1, 2, 3]
// const res2 = findIndex([2, 3, 4], 6); // -1
// const res3 = findIndex([45, 67, 8], 67); // 1
// const res4 = findIndex(); // undefined

// function getSumOfNumbers(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// const res1 = getSumOfNumbers(4, 5);

// const res2 = getSumOfNumbers(6, 8);

// IIFE -> Immediately Invoked Function Expression

// const res =  (function() {
//   return 5
// })()

// Function Declaration
// function foo(z, b) {
//   return z + b;
// };

// console.log(foo2(1, 2));

// const arr = [1, 2, 3]

// arr

// Function Expression
// const foo = function (z, b) {
//   return z + b;
// };

// let a = <uninitialized>

// console.log(a); // undefined

// let a = 5;

// foo();

// let foo = function () {};

// Hoisting

// const array = [[1, 2, 3], [0, 0, 7, 8], [3, 4], [2], [0, 1]];

// function getSumOfNUmbers(numbers = []) {
//   let sumOfNumbers = 0;

//   for (const number of numbers) {
//     sumOfNumbers += number;
//   }

//   return sumOfNumbers;
// }

// function getBiggestItem(array = []) {
//   let biggestItem = [];

//   let max = -Infinity;

//   for (const numbers of array) {
//     const sumOfNumbers = getSumOfNUmbers(numbers);

//     if (sumOfNumbers > max) {
//       max = sumOfNumbers;
//       biggestItem = numbers;
//     }
//   }

//   return biggestItem;
// }

// getBiggestItem(array);

// const obj = {
//   a() {
//     return 6;
//   },
// };

// obj.a();
