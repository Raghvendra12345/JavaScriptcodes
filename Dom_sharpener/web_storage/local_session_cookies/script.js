// console.log("Hi bhai")
localStorage.setItem("name","bob")
localStorage.removeItem("name")

sessionStorage.setItem("name","bob")
sessionStorage.setItem("name","john")  //name changed from john to bob

document.cookie="name=Kyle"

//this means cookie expires on 1-jan-2027
document.cookie="lastname=smith,expires="+new Date(2027,0,1).toUTCString()
console.log(document.cookie)