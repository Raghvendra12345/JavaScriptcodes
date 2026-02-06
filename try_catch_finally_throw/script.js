try{
    let a=10
    let b=a.toUpperCase()
}
catch(err){
    console.log("An error occured",err.message)
}

///
try{
    let a=5
    let b=a/0
    console.log(b)
}
catch(e){
    console.log("Error ",e.message)
}
finally{
    console.log("done for it")
}

////
try{
    console.log(a)
}
catch(error){
    console.log("error",error.message)
}

///
function checkAge(age){
    if(age<18)
        throw "Not eligible"

    else
        return "eligible"
}

try{
    console.log(checkAge(19))
}
catch(errorr){
    console.log(errorr)
}