// 1)

// var fun = a => a

// var a =10;

// console.log(fun(a))  10




// 2)

// var fun = a => a

// console.log(fun(a))

// var a =10; undefined




// 3)

// var fun = a =>{ a }

// var a =10;

// console.log(fun(a))  error




// 4)

// var fun =( a, b) =>{

// var sum = a + b

// return sum

// }

// var a =10;

// var b = 20

// console.log(fun(a, b)) //30




// 5)

// var fun =( a, b) =>

// var sum = a + b

// return sum

// var a =10;

// var b = 20

// console.log(fun(a, b))  //error




// 6) Main problem solved by fat arrow function

// var student = function(name){

//   this.name = name;

//   function printName() {

//     console.log(this.name)

//   }

//    printName()

// }

// var yash = new student("yash")  undefined




// 7) Beautifully solved by fat arrow function. Always remember this.[Favorite interview question]

// var student = function(name){

//   this.name = name;

//   var printName = () => {

//     console.log(this.name)

//   }

//    printName()

// }

// var yash = new student("yash")   //yash