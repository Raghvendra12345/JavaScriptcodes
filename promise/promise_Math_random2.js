const promise=new Promise((resolve,reject)=>{
    setTimeout(function(){
        const bookSearch=(Math.random()>0.5);
        if(bookSearch){
            resolve("Book Found")
        }
        else{
            reject("Book Not found")
        }
    },3000)
})

promise  
   .then((result)=>{
    console.log(result)
   })
   .catch((error)=>{
    console.log(error)
   })