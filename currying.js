// Currying is a technique where a function, instead of taking all arguments at once, takes them one by one
// , returning a new function at each step.
// In short:
// A curried function transforms a function of multiple arguments into a series of functions with 
// one argument each.

//create resuable partial functions


function add(a, b, c){
    return a + b + c; 
}
console.log(add(1, 2, 3)); // 6


function curry(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(curry(1)(2)(3));
