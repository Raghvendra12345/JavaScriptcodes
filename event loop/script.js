console.log("start")   //callstack-print


setTimeout(()=>{                  //webapi=callbackqueue-callstack-print
    console.log("setimeout running")
},2000)


// fetch("htps://api.netflix.com")   //webapi-microtaskqueue-callstack-print
// .then(()=>{
//     console.log("Api of netflix")
// })

function pro(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello")
        },1000)
    })
}
function pro1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello1")
        },2000)
    })
}
pro()
.then((res)=>{
    console.log(res)
    return pro1()
})
.then((resp)=>{
    console.log(resp)
})


console.log("end")   //callstack-print


///output
// start
// end
// Api of netflix
// settimeout running