
const arr2=[1,[2,3]]
console.log(arr2.flat())

const arr=[1,[2,[3,[4]]]]
console.log(arr.flat(3))


const arr1=[1,[2,[3,[4,[5,[6,[7]]]]]]]
console.log(arr1.flat(Infinity))


// function flattenArray(arr){
//     let result=[]
//     for(let item of arr){
//         if(Array.isArray(item)){
//             result.push(...item)
//         }
//         else{
//             result.push(item)
//         }
//     }
//     return result
// }
// const arro=[1,[2,3],[4,5]]
// console.log(flattenArray(arro))

//if arr is more nested then we use recursive approach
function flattenArray(arr){
    let result=[]
    for(let item of arr){
        if(Array.isArray(item)){
            result=result.concat(flattenArray(item))
        }
        else{
            result.push(item)
        }
    }
    return result
}
const arro=[1,[2,3],[4,[5,[6]]]]
console.log(flattenArray(arro))