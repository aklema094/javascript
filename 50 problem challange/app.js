// 1. print number 1 t0 10

for(let i =1; i<=10; i++){
    console.log(i);
}
// 2. print odd number 1 to 100

for(let i = 1; i<=100; i++){
    if (i % 2 !== 0)
        console.log(i);
}
// print the multiplication table with 7


for(let i = 1; i<=10; i++){
    
    console.log(` 7 X ${i} = `, i*7);
}
// print sum of 1 to 10
let sum = 0;
for( let i = 1; i<=10; i++){
    sum+=i;
}
console.log("Sum is : ", sum);

// catlculate factorial of 10!
let fact = 1;
for( let i = 1; i<=10; i++){
    fact *= i;
}
console.log("10! is : ", fact);

// calculate number greater then 10 and less then 30
sum =0;
for( let i = 11; i<30; i++){
    sum += i;
}
console.log("Sum is : ", sum);

let fahrenheit = (calcius) =>{
    return (calcius * (9/5)) + 32;
}
console.log("fahrenheit : ",fahrenheit(5));

let calcius = (fahrenheit) =>{
    return (fahrenheit - 32) * (5/9);
}
console.log("calcius : ",calcius(41));
// Calculate the sum of numbers in an array of numbers
let arr = [11,23,45,67,89,45,36,78];
sum =0;
for( let i = 0; i<arr.length; i++){
    sum += arr[i];
}
console.log("Sum of array is : ", sum);
console.log("avg of arr is : ",sum/arr.length);
//Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

let array = [-1,5,-7,8,9,0,4,5,6,-2];

const newArr = array.filter((val) =>{
     
    return val>-1;
});

console.log(array);
console.log(newArr);
// Find the maximum number in an array of numbers

const maximum = array.reduce((pre,curr) =>{

    return pre>curr? pre : curr;

});

console.log(maximum);

//Print the first 10 Fibonacci numbers without recursion
 let fibo = [0,1];
 let fib = 1;
 for (let index = 2; index < 10; index++) {
    fib +=index;
    fibo.push(fib);
 }
 console.log(fibo);
//create a function that will find the nth Fibonacci number using recursion

let n = parseInt(prompt("Enter a number"));
let Fibon = [0,1];
let fi = 1;
const getFibo = () =>{
    for(let i = 2; i< n ; i++ ){
       fi += i;
       Fibon.push(fi);
    }
}
getFibo();
console.log(Fibon); 
//create a function that will return a Boolean specifying if a number is prime

let isPrime = (number) =>{

    if (number < 2) return false;
    if(number == 2) return true;

    for(let i =2 ; i< number; i++){

        if(number % 2 == 0){
          return false;
        }
    }
    return true;
}
isPrime(3);



