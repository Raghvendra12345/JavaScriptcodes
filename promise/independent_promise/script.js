const pro1=new Promise((resolve)=>{
        setTimeout(()=>{
                resolve("pro 1")
        },1000)
    })
const pro2= new Promise((resolve)=>{
        setTimeout(()=>{
                resolve("pro 2")
        },2000)
    })

Promise.all([pro1,pro2])
.then(([pro1,pro2])=>{
    console.log(pro1)
    console.log(pro2)
})
.catch((err)=>{
    console.log(err)
})