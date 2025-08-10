// function declaration
// function foo() {}

// function expression
// const getSum = function(a, b) {
//   return a + b
// }

// arrow function
// const getSum = (a, b) => a + b;

// Higher Order Function
// function foo(a) {
//   return a(); // 18
// }

// foo(function (b) {
//   return 7 + b;
// });

// // Callback function
// const cb = function (b) {
//   return 1 + b;
// };

// foo(cb);

// const array = new Array(100);

// array.fill(0); // ?

// console.log(array);

// const array = ["a", "b", "c", "d", 5, 6, 6];

// const array2 = array.map((item) => item);

// array2.reverse();

// console.log(array, array2);

// const array = ["a", "b", "c"];

function myForEach(array = [], cb = () => {}) {
  for (let idx = 0; idx < array.length; idx++) {
    cb(array[idx], idx, array);
  }
}

// myForEach(array, (item, idx, arr) => {
//   console.log(item, idx, arr);
// });

// array.forEach((item, idx, arr) => {
//   console.log(item, idx, arr);
// });

// const result = array.join(); // 'a,b,c'

// console.log(result, array);

// function myJoin(array = [], separator = ",") {
//   let joinedItem = "";

//   for (let idx = 0; idx < array.length; idx++) {
//     joinedItem += array[idx];

//     if (idx < array.length - 1) joinedItem += separator;
//   }

//   return joinedItem;
// }

// const result2 = myJoin(array); // 'a,b,c'

// console.log(result2, array);

// const wakeUp = (name) => `${name}, wake up early`;
// const takeShower = (name) => `${name}, taking shower`;
// const workout = (name) => `${name}, workout`;
// const shutUp = (name) => `${name}, shut up`;

// const routines = [wakeUp, takeShower, workout, shutUp, () => "5555"];

// routines.forEach((item) => console.log(item("John")));

// function calcScoreChars(sentence = "") {
//   const scores = ["aeioulnrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];

//   return sentence
//     .toLowerCase()
//     .split("")
//     .reduce((acc, char) => {
//       const foundScore = scores.findIndex((item) => item.includes(char)) + 1;

//       return acc + foundScore;
//     }, 0);
// }

// console.log(calcScoreChars("hello"));

// function showCount(count) {
//   console.log(count ?? "Unknown");
// }

// showCount(0); // 0
// showCount(); // ?
// const obj = {};

// obj.a?.map(() => {
//   console.log("a");
// }); // ?

// function foo(fun) {
//   fun();
// }

// foo(function () {});

// 'hello'

// function myForEach(array = [], cb = () => {}) {
//   for (let idx = 0; idx < array.length; idx++) {
//     cb(array[idx], idx, array);
//   }
// }

// [1, 2, 3].forEach(() => {});

function getSum(firstNumber, secondNumber, operator) {
  let result = "Invalid data";

  // code
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  }

  return result;
}

const res1 = getSum(4, 5, "-");
const res2 = getSum(123, 4567, "*");

function a(a, b) {
  // code

  return;
}

// code

// sentence -> split yst symbols (.,- etc.) -> last longest word

// function splitBySeparators(string = "", separators = []) {
//   let splittedStr = [];

//   let item = "";

//   for (let idx = 0; idx <= string.length; idx++) {
//     const currentItem = string[idx]; // char || undefined
//     if ((separators.includes(currentItem) || !currentItem) && item !== "") {
//       splittedStr.push(item);
//       item = "";
//     } else {
//       item += currentItem;
//     }
//   }

//   return splittedStr;
// }

// console.log(
//   splitBySeparators(
//     "A revolution without dancing? is a revolution not worth having",
//     [",", ".", "?", " ", "-", "!"]
//   )
// );

// function getLastLongestWord(sentence = "hello world") {
//   let lastLongestWord = "";

//   for (const word of splitBySeparators(sentence, [
//     ",",
//     ".",
//     "?",
//     " ",
//     "-",
//     "!",
//   ])) {
//     if (word.length >= lastLongestWord.length) {
//       lastLongestWord = word;
//     }
//   }

//   return lastLongestWord;
// }

// const res = getLastLongestWord(
//   "A revolution1 without dancing? is a revolution2 not worth having"
// );

// console.log(res);

// function getAcronym(sentence = "") {
//   return sentence.split(" ").reduce((acronym, word) => {
//     return acronym + word[0].toUpperCase();
//   }, "");
// }

// function myReduce(array = [], cb, initialValue) {
//   const hasInitialValue = typeof initialValue !== "undefined";

//   let aggregator = hasInitialValue ? initialValue : array[0];

//   for (let idx = hasInitialValue ? 0 : 1; idx < array.length; idx++) {
//     aggregator = cb(aggregator, array[idx], idx, array);
//   }

//   return aggregator;
// }

// function getWordScore(word = "") {
//   const scoresByChar = ["aeioulnrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];

//   return word.split("").reduce((score, char) => {
//     return score + scoresByChar.findIndex((item) => item.includes(char)) + 1;
//   }, 0);
// }
