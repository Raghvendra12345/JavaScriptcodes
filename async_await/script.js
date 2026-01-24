

async function LadakhCalling(){
    try{
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
            // resolve("Go to Ladakh")
            reject("Error:Some Family Work")
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
         setTimeout(()=>{
            console.log("visit Beautiful Pangong Lake")
        },500)   
}
const step1=await buyBike()
console.log(step1)
const step2=await planTrip()
console.log(step2)
const step3=await reachedLadakh()
console.log(step3)
visitLake()
}catch (error){
  console.log(error)
}
}

LadakhCalling()