function loanSanctionPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const LoanSanction=(Math.random()>=0.5)
            if(LoanSanction){
                resolve("Loan Sanctioned")
            }
            else{
                reject("Loan not Sanctioned")
            }
        },3000)
    })
}

loanSanctionPromise()
   .then((result)=>{
    console.log(result)
   })
   .catch((error)=>{
    console.log(error)
   })