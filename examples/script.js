// window.console.log(window)
// console.log(document.body)
// document.body.style.background="red"

//answer 1,2,3
let runagain=true
const canDrive=(age)=>{
    return age>=18?true:false
}

while(runagain){
let age=prompt("Enter your age")
age=Number.parseInt(age)

//answer 3 ka main jo
if(age<0){
    console.error("Please enter a valid age")
    break;
}
if((canDrive(age))){
    alert("Yes you can drive")
}
else{
    alert("you cannot drive")
}
//answer 2 ka main j0
runagain=confirm("Do you want to play again")
}

///answer 4 ka main jo
if(age>4){
    location.href="https://google.com"
}

///answer 5
let color=prompt("change background color")
document.body.style.background="red"