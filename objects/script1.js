//working on object using function 

// function details(firstName,lastName,age,place){
//     this.firstName=firstName,
//     this.lastName=lastName,
//     this.age=age,
//     this.place=place
// }

// const Person=new details("John","Kelvin",45,"Florida")

// console.log(Person)

//example 2
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log("My father is " + myFather.age + ". My mother is " + 
    myMother.age + "."); 
