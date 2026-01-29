//example 1

// let i=1;
// let n=5;
// do{
//     if(i<=n){
//         console.log(i)
//     }
//     i++
// }while(i<=n)


// 2

// function addo(a,b){
//   return a+b
// }
// console.log(addo(5,6))

//3
// function areaOfRectnagle(l,b){
//   return l*b
// }
// console.log(areaOfRectnagle(5,6))

//4
// let fruit="apple"
// let ans=fruit.trim().split('').reverse().join('')
// console.log(ans)

//5
// function evenOrodd(a){
//   if(a%2!=0){
//     return "odd"
//   }
//   else{
//     return "even"
//   }
// }
// console.log(evenOrodd(6))

//6
// function leapYear(year){
//   if((year%4===0 && year%100!==0) ||(year%400===0)) return "It's a Leap Year";
//   else return "It's not a Leap Year"
// }
// console.log(leapYear(2021))

//7
let arr=[20,30,40,10,8]
let i=0
let sum=0
do{
  sum+=arr[i]
  i++
}while(i<arr.length)
console.log(sum)