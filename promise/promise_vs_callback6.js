//Working on question using callback

// function buyBike(callback1,callback2,callback3){
//     setTimeout(()=>{
//         console.log("Bought a Royal Enfield Himalayan")
//         callback1(callback2,callback3)
//     },2000)
// }

// function planTrip(callback1,callback2){
//     setTimeout(()=>{
//         console.log("Go to Ladakh")
//          callback1(callback2)
//     },1000)
// }

// function reachedLadakh(callback){
//     setTimeout(()=>{
//         console.log("reached in Ladakh")
//          callback()
//     },1000)
// }

// function visitLake(){
//     setTimeout(()=>{
//         console.log("visit Pangong Lake")
    
//     },1000)
// }

// buyBike(planTrip,reachedLadakh,visitLake)



//Working on a problem using Promise

function buyBike(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("Bought a Royal Enfield Himalayan") 
        },2000)
     })
}

function planTrip(){
       return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve("Go to Ladakh")
        },2000)
     })

}

function reachedLadakh(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve("reached in Ladakh")
        },1000)
     })
}

//if the function is a last function so we simply write it
function visitLake(){ 
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve("visit Beautiful Pangong Lake")
        },500)
     })  
}

buyBike()
.then((msg)=>{
    console.log(msg)
    return planTrip()
})
.then((msg1)=>{
    console.log(msg1)
    return reachedLadakh()
})
.then((msg2)=>{
    console.log(msg2)
    return visitLake()
})
.then((msg3)=>{
    console.log(msg3)
    
})