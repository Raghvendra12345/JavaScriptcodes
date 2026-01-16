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
  .then(addCoffeePowder)
  .then(brewCoffee)
  .then(haveCoffee)

// // Do not touch the code below:
// module.exports = {
//   boilWater,
//   addCoffeePowder,
//   brewCoffee,
//   haveCoffee,
// };