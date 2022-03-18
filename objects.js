/*
let day = "Monday"
const alarm = {
    weekendAlarm: "No alarm needed.",
    weekdayAlarm: "Get up at 7am."
}

if (day == "Saturday" || day == "Sunday"){
    console.log(alarm.weekendAlarm)
} else {
    console.log(alarm.weekdayAlarm)
}
*/
/*
const person = {
    name: "Jordan",
    age: "22",
    favSongs: ["Song 1 ","Song 2 ","Song 3 "],
    sayHi(){
    return(`Hello, my name is ${this.name}, my favourite songs are ${this.favSongs}`)
}
}
const pet = {
    name: "Meg",
    typeOfPet: "Cat",
    age: "7",
    colour:"Black"
}

console.log(person.sayHi())
*/

let total = 0;
let order = []
const coffeeShop = {
    branch:"",
    drinks: { 
        Coffee: 2.50, Coke: 1.20, Water: 0.80 },
    food: { 
        Cake: 3.40, Sandwich: 2.50, Crisps: 1.00},

    drinksOrdered(){
        for (let price of Object.values(coffeeShop.drinks)){
            total += price
        }
        order.push(Object.entries(coffeeShop.drinks))
        return(`Your order ${Object.entries(coffeeShop.drinks)}.`)
    },

    foodOrdered(){
        for (let price of Object.values(coffeeShop.food)){
            total += price
        }
        order.push(Object.entries(coffeeShop.food))
        return(`Your order ${Object.entries(coffeeShop.food)}.`)
    }
}
coffeeShop.drinksOrdered()
coffeeShop.foodOrdered()
console.log("Your Order:",order)
console.log(`Total comes to: £${total}`)
