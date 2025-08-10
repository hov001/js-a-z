// const mazda = "Mazda",
//   opel = "Opel",
//   volks = "Volkswagen",
//   bmw = "BMW",
//   mercedesBenz = "Mercedes-Benz";

// declaration with constructor Array
// const cars = new Array("Mazda", "Opel", "Volkswagen", "BMW", "Mercedes-Benz"); // []

// console.log(cars);

// literally declaration
// const cars = ["Mazda", "Opel", "Volkswagen", "BMW", "Mercedes-Benz"]; // []

// console.log(cars[2]);
// console.log(cars.length); // 5

// console.log(cars);

// cars[3] = "x";

// cars[15] = "Suzuki";

// console.log(cars);

// console.log(cars);

// const cars = ["Mazda", "Opel", "Volkswagen", "BMW", "Mercedes-Benz"];
// // Push
// console.log(cars);

// const newLength = cars.push('Suzuki', '4', 6);

// console.log(cars, newLength);
// Pop
// const res = cars.pop();
// console.log(cars);

// Unshift
// const res = cars.unshift("Suzuki", "4", 6);

// console.log(cars);

// Shift
// const res = cars.shift();

// console.log(cars, res);

// const array = [4, 5, 6, 7, 8, 8, 6];

// code

// const numbers = [4, -2, 13, 45, 3, 0, 56];

// const doubledNumbers = [];

// for (let idx = 0; idx < numbers.length; idx++) {
//   doubledNumbers.push(numbers[idx] * 2);
// }

// console.log(doubledNumbers);

// const numbers = [4, -2, 13, 45, 3, 0, 56];
// const number = 7;

// const filteredNumbers = [];

// for (let idx = 0; idx < numbers.length; idx++) {
//   const currentNumber = numbers[idx];

//   if (currentNumber > number) {
//     filteredNumbers.push(currentNumber);
//   }
// }

// const result = filteredNumbers.length ? filteredNumbers : "Does not exists";

// console.log(result);

// const numbers = [45, 12, 3, 6, 17, 0];

// const evens = [];
// const odds = [];

// for (let idx = 0; idx < numbers.length; idx++) {
//   const currentNumber = numbers[idx];
//   if (currentNumber % 2 === 0) {
//     evens.push(currentNumber);
//   } else {
//     odds.push(currentNumber);
//   }
// }

// console.log(evens, odds);

// const sentence = "Keep your friends close, but your enemies closer.";

// const words = [];

// const excludedChars = [",", ".", "?", "!", " ", "[", "]"];

// let word = "";

// for (let idx = 0; idx <= sentence.length; idx++) {
//   const char = sentence[idx];

//   if (char && !excludedChars.includes(char)) {
//     word += char;
//   } else if (word.length) {
//     words.push(word);
//     word = "";
//   }
// }

// console.log(words);

// ==, ===
// 5 != '5', 5 !== '5'

// const a = '5'

// if(a === 5) {
//   a + 6 // 11 -> '56'
// } else {

// }

// const numbers = [1, 2, 5, 7, 8];
// const number = 8;

// let foundIndex = -1;

// for (let idx = 0; idx < numbers.length; idx++) {
//   if (numbers[idx] === number) {
//     foundIndex = idx;
//     break;
//   }
// }

// console.log(foundIndex);
