let count=0;
let time;
const  searchh=document.getElementById("searchinput")
const resultt=document.getElementById("resultbox")

searchh.addEventListener("input",function(event){
    const query=event.target.value.trim();

clearTimeout(time)

time=setTimeout(()=>{


    if(query!="password"){
        resultt.textContent="Wrong password attempt "+ ++count;
        resultt.style.color="red"
    }
    else{
        resultt.textContent="Right"
        resultt.style.color="green"
        count=0
    }
},1000)

});