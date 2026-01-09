// Callback working

// Story:
// There were two personA and personB and they were friends ...
// Person A ordered a pizza ,then he go to playzone and when the meal is   
// ready he hear the announment of "Meal Ready Person A" and he goes back
//to take his meal
// Person B  ordered a pizza ,then he go to salon for his hair cut 
// and when the meal is ready he heared the announment of 
// "Meal Ready Person B" and he goes back to take his meal

//Person A and B
function orderedpizza(callback){
    console.log("Pizza Ordered")
    setTimeout(()=>{
        console.log("meal ready")
        callback()
    },1000)
}
function goToPlayZone(){
    console.log("go to play Zone")
}

function returnfromPlayZone(){
    console.log("return from play zone and enjoying meal")
}
// orderedpizza(returnfromPlayZone);
// goToPlayZone();




function goToSalon(){
    console.log("go to salon for hair cut")
}

function returnfromSalon(){
    console.log("return from salon and enjoying meal")
}

orderedpizza(returnfromSalon);
goToSalon();