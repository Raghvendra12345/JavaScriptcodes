function incrementt(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const newvalue=value+1;
            console.log("added 1")
            resolve(newvalue)
        },2000)
    })
}

function doublee(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const newvalue=value*2;
              console.log("multiply by 2")
            resolve(newvalue)
        },1000)
    })
}
function squaree(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const newvalue=value*value;
            console.log("squaring")
            resolve(newvalue)
        },1000)
    })
}

const startValue=2;


incrementt(startValue)
  .then((res)=>{
    console.log(res)
    return doublee(res)
  })
  .then((res1)=>{
    console.log(res1)
    return squaree(res1)
  }).then((resp)=>{
    console.log(resp)
    
  })