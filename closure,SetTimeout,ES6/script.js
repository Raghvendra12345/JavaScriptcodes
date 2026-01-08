
//closure
// function outerr(){
//     let count=0;
//     function innerr(){
//         count++;
//         console.log(count)
//     }
//     return innerr
// }

// const funcc=outerr()

// funcc()

// funcc()
// funcc()

//closurewith settimeout

// for(let i=1;i<=3;i++){
//     setTimeout(function(){
//         console.log(i)

//     },1000)
// }

//examples

// console.log('a');
// console.log('b');

// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('d'), 0);

// console.log('e');    

    // output=a b e d c


//ForEach example

var arr = [1, 2,3,5]

var newArr = arr.forEach((item, i ) => {

console.log(item + 'index' + i)

return item + i

})
  
console.log(newArr)  
//    1index0 2index1 3index2 5index3 undefined


//map example

var arr = [1, 2,3,5]

var newArr = arr.map((item, i ) => {

console.log(item + 'index' + i)

return item + i

})    

//  1index0 2index1 3index2 5index3 [1,3,5,8]