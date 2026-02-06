function prom1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello promise 1")
        },3000)
    })
}

function prom2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello promise 2")
        },2000)
    })
}
prom1()
.then((res)=>{
    console.log(res)
    return prom2()
})
.then((resp)=>{
    console.log(resp)
})