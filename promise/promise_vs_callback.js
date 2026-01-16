function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step 1")
            resolve("Message from step 1")
        },2000)
    })
}
function step2(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step 2 received: "+message)
            resolve()
        },1000)
    })
}
function allstepsCompleted(){
    console.log("All Steps Completed")
}

step1()
  .then((msg)=>step2(msg))
.then(()=>allstepsCompleted())
