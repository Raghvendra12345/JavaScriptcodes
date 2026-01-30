//Normal fun
// function calculatevolume(length,breadth,height){
//     return length*breadth*height
// }
// console.log(calculatevolume(4,5,6))


//currying

function calculatevolume(length){
    return function(breadth){
        return function (height){
            return length*breadth*height
        }
    }
}
console.log(calculatevolume(4)(5)(6))

function sum(a){
    return function(b){
        return a+b
    }
}
console.log(sum(7)(3))