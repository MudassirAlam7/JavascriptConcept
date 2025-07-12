// An IIFE(immediately invoked function expression) is a JavaScript function that is executed immediately after it's defined. 
// It is wrapped in parentheses to make it an expression and followed by () to invoke it.

// Avoid polluting the global scope
// Create private variables
// Run setup code immediately
// Common in modular patterns and legacy JavaScript (before ES6)


(function(){
    console.log("this function is executed immediately")
})()

for(var i = 0; i<4; i++){
    (function(){
    setTimeout(function(){
        console.log(i); // This will log 4 four times due to closure
    }, 2000)
        
    })()
}

for(let i = 0; i<4; i++){
    (function(){
    setTimeout(function(){
        console.log(i); // This will log 4 four times due to closure
    }, 2000)
        
    })()
}