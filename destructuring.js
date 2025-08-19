// function foo(param1, param2) {
//   console.log(param1, arguments);

//   for (const key in arguments) {
//     console.log(arguments[key]);
//   }
// }

// function foo(param1, ...args) {
//   console.log(param1, ...args);
// }

// foo("a", "b", "c", "d");

// const obj = {
//   a: "3",
//   b: 7,
// };

// const obj2 = {
//   c: "4",
//   ...obj,
//   b: 9,
// };

// console.log(obj2);

const array = [1, 2, 3, 4];

// old version
// const first = array[0];
// const tail = array.slice(1);

// console.log(first, tail);

// new version (destructuring)
// const [_, ...tail] = [1, 2, 3, 4];

// const [first, second, third, [a, [e, c, t]]] = [
//   1,
//   2,
//   [3, 4],
//   [5, [6, 7, 8]],
//   9,
// ];

// const age = 56;

// const { name, ...tail } = { name: "Hovhannes", age: 29 };

// console.log(tail); // 8
