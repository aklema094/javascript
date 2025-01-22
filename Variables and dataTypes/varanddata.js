/*alert("This is a alert");*/
console.log("Hello world");
fullName = "Aklema Sultana";
console.log(fullName);
x = null
console.log(x);
var age = 24; // var can be redeclare and update
var age = 45;
var age = 86;
console.log(age);
let price = 45; // let can not recreate bit can update
price = 67;
console.log(price);
const marks = 34;
console.log(marks); // can't redeclate or update
let a; // undefined / not assigent any value
//const b;  you cant leave undefined any const value we have to define it. it can be null.
const c = null
console.log(c);
// let is block scope
{
    let value = 5;
    // let value = 10 X we can't do this in same block
    console.log(value);
}
{ 
    // we can redefine value in different block
    let value = 10;
    
    console.log(value);
}
console.log(typeof marks);
let s = null;
console.log(typeof s);
let j = BigInt("123");
console.log(typeof j);
let k = Symbol("2345");
console.log(typeof k);

const student = {
     sName : "Aklema Sultana",
     sAge : 26,
     sCGPA : 3.48,
     isGraguate : true,

};
console.log(student);
console.log(student.sAge);
student["sAge"] = student["sAge"] + 1; // update age;
console.log(student["sAge"]);
// practice 1
const product = {
    pName : "ball pen",
    rating : 5,
    price : 5,
    isDeal : true
}
console.log(product);
console.log(typeof product.rating);

