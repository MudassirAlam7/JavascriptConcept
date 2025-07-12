// A closure is a function that remembers variables from its lexical scope, even after the outer 
// function has completed. Closures allow private variables and are heavily used in callbacks, 
// event handlers, and module patterns.

// uses

// - Data encapsulation

function outerFunction() {
    let balance = 1000;
    return {
        deposit : (amount)=>balance += amount,
        withdraw : (amount)=>balance -= amount,
        getBalance : ()=>balance
    }
}

// console.log(balance); // ReferenceError: balance is not defined
const account = outerFunction()
account.deposit(500)
account.withdraw(400)
console.log(account.getBalance());


// to make funtion factories 
function functionFactory (a){
    return function(b){
        return a*b
    }
}

const multiplyByTwo = functionFactory(2)
console.log(multiplyByTwo(5));
