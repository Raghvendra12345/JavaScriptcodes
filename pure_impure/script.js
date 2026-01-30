//no need to depend on other-Pure function

// function sqaurelength(number){
//     return number*4
// }
// const result=sqaurelength(8)
// console.log(result)

// function appendNumbers(arr){
//     arr.push(5,6)
//     return arr
// }
// const res=appendNumbers([1,2,3,4])
// console.log(res)



function appendNumbers(arr){
    let newArr=[]
    newArr.push(...arr,5,6)
    return newArr
}
const res=appendNumbers([1,2,3,4,8])
console.log(res)

//it depend on other variable or parameter outside function- Impure Function

// const x=7;
// function sqaurelength(number){
//     return number*4*x
// }
// const result=sqaurelength(8)
// console.log(result)

// let newArr=[]
// function appendNumbers(arr){
//     newArr.push(...arr,5,6)
//     return newArr
// }
// const res=appendNumbers([1,2,3,4,7])
// console.log(res)