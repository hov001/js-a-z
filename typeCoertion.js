// const number = 20;

// // to string

// // explicit
// String(number); // '20'

// // implicit
// const implNumber = number + '' // '20'

// to boolean

// const number = 0;

// // explicit
// Boolean(""); // false

// // implicit
// !!number;

// "5" + 3; // "53"

// const obj = {};

// console.log(String(obj));
// console.log(+obj);

// toString

// toString() {
//   return '[object Object]'
// }

// // valueOf

// valueOf() {
//   return toString()
// }

// Number(obj)

// const array = [5]; //

// console.log(+array); // ?

/*

toString() {
  return array.join(',') +'5'
}

*/

// const obj = {};

// obj.toString = () => {
//   return "";
// };

// obj.valueOf = () => {
//   return "45";
// };

// console.log(+obj); // 45

// +"45ab"; // N

const date = new Date("08/11/2025");

console.log(date.getTime());

[1, 2, 3].map();
