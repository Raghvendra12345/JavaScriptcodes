function concertPassPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const LoanSanction=(Math.random()>=0.5)
            if(LoanSanction){
                resolve("Pass received")
            }
            else{
                reject("Pass not received")
            }
        },3000)
    })
}

concertPassPromise()
   .then((result)=>{
    console.log(result)
   })
   .catch((error)=>{
    console.log(error)
   })