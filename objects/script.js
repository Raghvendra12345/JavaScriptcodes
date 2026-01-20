//example 1 
 const car={
   name:"Porshe",
   type:"racing",
   speed:410,
   no_of_engines:2
  
}

console.log("The name of car is "+car.name+".It is of "+car.type+
" type .Its highest speed is "+car.speed+".It has "+
car.no_of_engines+" engines.")

//example 2

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display JSON
let text = JSON.stringify(person);

console.log(text)