function boilWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Water boiled")
    },2000)
  })
}

function addCoffeePowder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Added coffee powder")
    },500)
  })
}

function brewCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Brewed coffee")
    },1000)
  })
}

function haveCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Enjoying my coffee")
    },3000)
   })
 }

boilWater()
  
.then((msg)=>{
    console.log(msg)
    return addCoffeePowder()
})
.then((msg1)=>{
    console.log(msg1)
    return brewCoffee()
})
.then((msg2)=>{
    console.log(msg2)
    return haveCoffee()
})
.then((msg3)=>{
    console.log(msg3)
    
})