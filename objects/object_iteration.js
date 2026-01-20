
//example 1
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// // Create Source Object
// const person2 = {firstName: "Anne",lastName: "Smith"};

// // Assign Source to Target
// Object.assign(person1, person2);
// console.log(person2.firstName,person2.lastName)


//example 2

const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.entries(person);
console.log(text)