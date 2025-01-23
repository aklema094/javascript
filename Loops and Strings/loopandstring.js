for (let index = 0; index <= 10; index++) {
  
    if(index % 2 == 0){

        console.log(index);
    }
    
}
// for of loop
let str = "Aklema"
for(let val of str){ // itarate every index of str
    console.log(val);
}
// for in loop
let student = {
    name : "Aklema",
    age : 26,
    cgpa : 4
}
for(let key in student){
    console.log(key , " : ",student[key]);
}
// guessing game
let gNum  = 25;
let uNum = prompt("Guess a number");
while(uNum != gNum){
    uNum = prompt("You guess wrong!!, Guess again. : ")
}
console.log("Congrasulation you guess right number");

// string
str = "Aklema Sultana";
console.log(str.length);
console.log(str[0]);
// template literals
let output = `The name of student is ${student.name} and age is ${student.age + 1}`;
console.log(output);

let s = "Hello world  "
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.slice(2,6));
console.log(s.trim());
console.log(s.concat(str));
console.log(s.replace("o","a"));
console.log(s.replaceAll("o","a"));
console.log(s.charAt(0));

let n = prompt("Enter user name");
let u = `@${n}${n.length}`;
console.log(u);
