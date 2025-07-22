// Primitives are immutable and compared by value.
// Type	Example	typeof result
// string	'Hello'	'string'
// number	42, 3.14, NaN	'number'
// boolean	true, false	'boolean'
// undefined	variable declared but not initialized	'undefined'
// null	intentional absence of value	'object' ← quirk
// symbol	Symbol('id')	'symbol'
// bigint	12345678901234567890n	'bigint'

// Non-primitives are mutable and compared by reference.
// Type	Example	typeof result   
// object	{ name: 'Alice' }	'object'
// array	[1, 2, 3]	'object'


// JavaScript performs implicit conversion in expressions. 
// For example, adding a number and a string results in string concatenation:
console.log(5 + '5'); // "55"   
// However, strict equality (===) checks both value and type, preventing implicit conversion:
console.log(5 === '5'); // false    
// To avoid issues with type coercion, use strict equality (===) instead of loose equality (==):
console.log(5 == '5'); // true (loose equality, type coercion occurs)
console.log(5 === '5'); // false (strict equality, no type coercion)        
