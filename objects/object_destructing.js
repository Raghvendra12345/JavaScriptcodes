
//example 1
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// // Destructuring
// let {firstName, lastName} = person;
// console.log(firstName+" "+lastName)


//example 2
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// // Destructuring
// let {lastName : name} = person;
// console.log(name)


//example 3 array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// // Destructuring
// let [fruit1, fruit2] = fruits;
// console.log(fruit1,fruit2)


//example 4 array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let [fruit1,,,fruit2] = fruits;
// console.log(fruit1,fruit2)


//example 5
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// // Destructing
// let text = "";
// for (const [key, value] of fruits) {
//   text +=  key + " is " + value+"\n";
// }

// console.log(text)


//example 6
let firstName = "John";
let lastName = "Doe";

// Destructing
[firstName, lastName] = [lastName, firstName];
console.log(firstName,lastName)