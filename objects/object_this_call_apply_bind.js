
//call function
//example 1

// function details(){
//     console.log(`${this.firstName} ${this.lastName}`)
// }
// const obj1={
//     firstName:"Ryan",
//     lastName:"Stanos"
// }
// const obj2={
//     firstName:"Hopper",
//     lastName:"Cook"
// }
// details.call(obj2)

//example 2

// const person={
//     fullname:function(city,country){
//         console.log(this.firstName+","+this.lastName+","+city+","+country)
//     }
// }
// const obj1={
//     firstName:"Ryan",
//     lastName:"Stanos"
// }
// const obj2={
//     firstName:"Hopper",
//     lastName:"Cook"
// }
// person.fullname.call(obj1,"toronto","Canada")


//apply
//example

// const person={
//     fullname:function(city,country){
//         console.log(this.firstName+","+this.lastName+","+city+","+country)
//     }
// }
// const obj1={
//     firstName:"Ryan",
//     lastName:"Stanos"
// }
// const obj2={
//     firstName:"Hopper",
//     lastName:"Cook"
// }
// person.fullname.apply(obj2,["toronto","Canada"])

//bind
//example

function details(){
    console.log(`${this.firstName} ${this.lastName}`)
}
const obj1={
    firstName:"Ryan",
    lastName:"Stanos"
}
const obj2={
    firstName:"Hopper",
    lastName:"Cook"
}
const bounded=details.bind(obj1)
bounded()