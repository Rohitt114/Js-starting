let score = "42Hi"

console.log(typeof score);
console.log(typeof (score));

let new_score = Number(score)
console.log(typeof new_score);

console.log(new_score); // It will convert successfuly but when you will print it it will represent as not a number (NaN).



let value = null
console.log(typeof value);

let new_value = Number(value)
console.log(new_value); // null is converted into 0

/*
true <=> 1
false <=> 0
*/

let isLoggedIn = 0
console.log(typeof isLoggedIn);

let isLoggedIn2 = Booleannode basics_01/conversion_operation.js(isLoggedIn)
console.log(isLoggedIn2);


