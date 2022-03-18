/*
let accnum = "0161203"
const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`)
}

cashWithdrawal(300, accnum);
*/
// -------------------------------------------
/*
const addUp = (num1, num2) => {
    return num1 + num2;
}

console.log(addUp(1, 4));
*/

// -------------------------------------------

/* Activity 1
const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));
*/

// -------------------------------------------

/* Activity 2 + personal alterations
let orderCount = 0;
let currentOrders = []
const takeOrder = (base, toppings) => {
    currentOrders.push(`${base} base with ${toppings} toppings`)
    orderCount++
}

takeOrder("Tomato", "Pineapple");
takeOrder("BBQ", "Pepperoni");
console.log(currentOrders)
*/

// -------------------------------------------

/* Activity 3
let pincode = 1234; 
let cashBalance = 250.00;

const withdraw = (pin, withdrawAmount) => {
    if (withdrawAmount <= cashBalance && pin == pincode){
        console.log(`Pin ${pin} is correct, withdrawing £${withdrawAmount}`)
        cashBalance -= withdrawAmount
        console.log(`Cash balance is now £${cashBalance}`)
    } 
    else if (pin != pincode){
        console.log(`Pin ${pin} is incorrect, please try again.`)
    } 
    else if (withdrawAmount >= cashBalance && pin == pincode){
        console.log(`Unable to withdraw £${withdrawAmount}, current balance is £${cashBalance}`)
    }
}

withdraw("1234", "200")
*/