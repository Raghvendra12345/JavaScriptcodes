function incrementt(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const newvalue=value+1;
            resolve(newvalue)
        },2000)
    })
}

function doublee(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const newvalue=value*2;
            resolve(newvalue)
        },1000)
    })
}
function squaree(value){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const newvalue=value*value;
            resolve(newvalue)
        },1000)
    })
}

const startValue=2;


incrementt(startValue)
  .then((incvalue)=>doublee(incvalue))
  .then((doub)=>squaree(doub))
  .then((squareeValue)=>console.log(squareeValue))