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
