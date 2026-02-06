// let arr=[11,22,33]
// let arr2=arr.map((value,indexedDB,arr)=>{
//       console.log(value,indexedDB,arr)
//       return value+1
// })
// console.log(arr2)






// const fruit=new Map

// fruit.set("Mango",500)
// fruit.set("Papaya",600)
// fruit.set("Pineapple",400)

// console.log(fruit)
// console.log(fruit.get("Papaya"))
// console.log(fruit.delete("Papaya"))
// fruit.set("Pineapple",450)   // to change value
// console.log(fruit)

// const car=new Map([
//     ["BMW","350"],
//     ["Ferrari","450"],
//     ["Porsche","300"],
// ])
// console.log(car)

const car=new Map([
    ["BMW",350],
    ["Ferrari",450],
    ["Porsche",300],
])
let text=''

// car.forEach((value,key)=>{
//     text+=key+"="+value+"\n"
// })
// console.log(text)

// for(const x of car.keys()){
//     text+=x+"\n"
// }
// console.log(text)

for(const x of car.values()){
    text+=x+"\n"
}
console.log(text)