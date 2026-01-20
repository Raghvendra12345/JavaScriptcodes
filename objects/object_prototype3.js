function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create 2 Person Objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Add a new Property
Person.prototype.nationality = "English";
Person.prototype.occupation="Software Engineer"

console.log("The occupation of my father is " + myFather.occupation)