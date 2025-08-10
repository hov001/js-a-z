"use strict";

// const personArray = ["Hovhannes", "Kocharyan", 29, true, 2];

// console.log(personArray);

// delete personArray[1];

// console.log(personArray); // ['Hovhannes', <empty item>, 29, true, 2]

// {
//   0: 'Hovhannes',
//   2: 29,
//   3: true,
//   4: 2,
//   100: 8,
//   length: 101
// }

// array[100] = 8

// new Array()

// const isMarried = "age";

// const person = {
//   secondName: "Kocharyan",
//   firstName: "Hovhannes",
//   [isMarried]: 29, // age: 29
//   isMarried: true,
//   countOfChildren: 0,
// };

// delete person.firstName;

// if (person.hasOwnProperty("countOfChildren")) {
//   //
// }

// console.log(person.hasOwnProperty("countOfChildren"));

// console.log(person); // 2

// delete person.isMarried;

// console.log(person);

// person.countOfChildren = 4;

// console.log(person.countOfChildren); // 4

// console.log(person[isMarried]); // 29

// console.log(person["isMarried"]);

// person["countOfChildren"] = 4;

// 'false' vs false

// person[0] // Rumyan
// person[1] // Hovsepyan

// person[2] // 26
// person[3] // true
// person[4] // 2

// person.countOfChildren = 4;

// Object.keys
// const keys = Object.keys(person);

// console.log(keys);

// // Object.values
// const values = Object.values(person);

// console.log(values);

// // Object.entries
// const entries = Object.entries(person);

// console.log(entries);

// const person = {
//   firstName: "Hovhannes",
//   lastName: "Kocharyan",
//   age: 26,
//   hasWife: true,
// };

// const sentence = `Hello, my name's ${person.firstName} ${
//   person.lastName
// }, i'm ${person.age} years old and i'm ${
//   person.hasWife ? "married" : "single"
// }.`;

// => Hello, my name's Hovhannes Kocharyan, i'm 26 years old and i'm married.

// const object = {
//   hasOwnProperty: 4,
// };

// console.log(object.hasOwnProperty());

// const object = {
//   a: true,
// };

// console.log(object.hasOwnProperty("hasOwnProperty")); // true
// console.log("hasOwnProperty" in object); // true

// let a = 5;
// let b = a;

// a = 6;

// console.log(a); // 6
// console.log(b); // 5

// const a = [1, 2, 3];
// let b = [1, 2, 3];

// a.push(4);

// console.log(a); // ? [1, 2, 3, 4]
// console.log(b); // ? [1, 2, 3]

// b = a

// a.push(5)

// console.log(a); // ? [1, 2, 3, 4, 5]
// console.log(b); // ? [1, 2, 3. 4, 5]

// Vining position: Losing position
// const beats = {
//   Rock: 'Scissors',
//   Scissors: 'Paper',
//   Paper: 'Rock'
// }

// Global
// Block
// Functional

// let i = 0

// while(i < 5) {

//   i++
// }

// console.log(i);

// const array = [
//   { gender: "male", name: "Bolo", age: 25 },
//   { gender: "male", name: "Samo", age: 8 },
//   { gender: "female", name: "Lolo", age: 25 },
//   { gender: "female", name: "Lilo", age: 7 },
//   { gender: "male", name: "Hakobik", age: 3 },
//   { gender: "female", name: "Laura", age: 32 },
//   { gender: "male", name: "Karen", age: 18 },
// ];

// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//   const person = array[i];

//   if (person.age >= 18) {
//     newArray.push({ name: person.name });
//   }
// }

// console.log(newArray); // { name: array[i].name }

// let array = [
//   { gender: "male", name: "Bolo", age: 25 },
//   { gender: "male", name: "Samo", age: 8 },
//   { gender: "female", name: "Lolo", age: 25 },
//   { gender: "female", name: "Lilo", age: 7 },
//   { gender: "a", name: "B", age: 3 },
// ];

// const sortedByGender = {};

// for (const person of array) {
//   if (!sortedByGender.hasOwnProperty(person.gender)) {
//     sortedByGender[person.gender] = [];
//   }

//   sortedByGender[person.gender].push({ name: person.name });
// }

// console.log(sortedByGender);

const products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    brand: 1,
    category: 1,
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    brand: 1,
    category: 1,
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    brand: 2,
    category: 1,
  },
  {
    id: 4,
    title: "OPPOF19",
    price: 280,
    brand: 4,
    category: 1,
  },
  {
    id: 5,
    title: "Huawei P30",
    price: 499,
    brand: 3,
    category: 1,
  },
];

const brands = [
  {
    id: 1,
    title: "Apple",
  },
  {
    id: 2,
    title: "Samsung",
  },
  {
    id: 3,
    title: "Huawei",
  },
  {
    id: 4,
    title: "OPPO",
  },
  {
    id: 5,
    title: "Microsoft Surface",
  },
  {
    id: 6,
    title: "HP",
  },
  {
    id: 7,
    title: "Xiaomi",
  },
  {
    id: 8,
    title: "Infinix",
  },
  {
    id: 9,
    title: "Impression of Acqua Di Gio",
  },
];

const categories = {
  1: "smartphones",
  2: "laptops",
  3: "headphones",
  4: "fragrances",
};

const combinedProducts = [];

for (const product of products) {
  let foundBrand = "";
  for (const brand of brands) {
    if (brand.id === product.id) {
      foundBrand = brand.title;
      break;
    }
  }

  combinedProducts.push({
    id: product.id,
    title: product.title,
    price: product.price,
    brand: foundBrand,
    category: categories[product.category],
  });
}

console.log(combinedProducts);

const player1 = "Rock";
const player2 = "Scissors";

const beats = {
  Rock: "Scissors",
  Scissors: "Paper",
  Paper: "Rock",
};

let result = "Player 2 wins!";

if (!beats.hasOwnProperty(player1) || !beats.hasOwnProperty(player2)) {
  result = "Invalid value";
} else if (player1 === player2) {
  result = "Draw!";
} else if (beats[player1] === player2) {
  result = "Player 1 wins!";
}
