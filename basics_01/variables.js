const accountId = 54232
let accountEmail = "rohit@gmail.com"
var accountPass = "123456"
accountCity = "Nowhere"

// accountId = 3 // constant cannot be changred
accountEmail ="dfkkjl@gmail.com"
accountPass = "4213"
accountCity = "hugjf"
let accountType;

// If accountType is need to be empty use semicolon, but it will work without that as well. IT REPRESENTS HOW SAFE THIS LANGUAGE IS. 

console.log(accountId);
console.table([accountEmail, accountPass, accountCity, accountType]);

/* 

Avoid using var for variables because of the problem in block scope and function scope. Even not using any will also work, but avoid it as well.

*/