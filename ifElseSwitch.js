/* Activity 1
let age = "16"
let country = "UK"
if (age >= "17" && country == "UK"){
    console.log("I can serve you.")
} else {
    console.log("You aren't old enough.")
}
*/

/* Activity 2
const pizzaTopping = "Mushroom";
switch (pizzaTopping) {
    case "Pepperoni":
        console.log(`${pizzaTopping} is an important ingredient for my pizza.`)
        break;
    case "Mushroom":
        console.log(`${pizzaTopping} shouldn't be on a pizza.`)
        break;
    case "Ham":
        console.log(`I don't mind ${pizzaTopping} on a pizza.`)
    default:
        console.log(`No opinion on ${pizzaTopping} on my pizza`)
}
*/

/* Activity 3
let password = "12345678"

if (password.length >= 8){
    console.log(password)
} else {
    console.log(`${password} is less than 8 characters.`)
}
*/

/* Activity 4
let num = "15"
if (num % 3 == 0 || num % 5 == 0){
    console.log(`${num} is divisible by either 3 or 5.`)
    if (num % 3 == 0){
        console.log(`${num} is divisible by 3`)
    } if (num % 5 == 0){
        console.log(`${num} is divisible by 5`)
    }
} else {
    console.log(`${num} is not divisible by 3 or 5.`)
}
*/

/* Activity 5
let num = "2"
if (num % 3 == 0 && num % 5 != 0){
    console.log("fizz")
}
if (num % 5 == 0 && num % 3 != 0){
    console.log("buzz")
}
if (num % 5 == 0 && num % 3 == 0){
    console.log("fizz buzz")
}
if (num % 5 != 0 && num % 3 != 0){
    console.log(`${num} is not divisible by either 3 or 5.`)
}
*/

/* Activity 6
let num = "1001"
if (num == num.split('').reverse().join('')){
    console.log(`${num} is a palindome.`)
} else {
    console.log(`${num} is not a palindome`)
}
*/

