function* generateEvenNumbers(limit) {
    // write your code here
    // yield all even numbers up to 'limit' (inclusive)
    for (let i = 0; i <= limit; i += 2){
        yield i;
    }
}
const gen=generateEvenNumbers(8)

console.log(gen.next())
console.log(gen.next().done)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().done)