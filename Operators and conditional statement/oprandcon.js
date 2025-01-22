console.log("Operators and Conditional statement");
// Arithmetic operators
let a = 5;
let b = 2;
console.log(" a + b : " , (a + b));
console.log(" a - b : " , (a - b));
console.log(" a * b : " , a * b);
console.log(" a / b : " ,a / b);
console.log(" a % b : " ,(a % b));
console.log(" a ^ b : " ,(a ** b));
console.log(" ++a pre Increment : " +(++a)); a = 6
console.log(" --a pre Decrement : " +(--a)); a= 5
a = a++ // post Increment a = 5
console.log(" a++ post Increment : " +(a));
a = a-- // post decrement a = 5
console.log(" a-- post Decrement : " +(a));
// assignment operator
console.log(" a += b : " + (a += b)); // 7
console.log(" a -= b : " + (a -= b)); //5
console.log(" a *= b : " + (a *= b)); //10
console.log(" a /= b : " + (a /= b)); // 5
console.log(" a %= b : " + (a %= b)); // 1
console.log(" a **= b : " + (a **= b)); // 1
// comparison operator
let c = 10;
let d = 5;
console.log(" 10 == 5", c==d); //false
console.log(" 10 != 5", c!=d); // true
console.log(" 10 === 5", c===d); //false
console.log(" 10 != 5", c!==d); // true

let age = 16;

age>=18 ? console.log("Adult") :  console.log(" Not Adult"); // not adult

let num = prompt("Enter a number ");
if(num % 5 == 0 ){
    console.log(num , " is a muliple of 5");
}else{
    console.log(num , " is not a muliple of 5");
}

