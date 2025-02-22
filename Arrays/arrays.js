console.log(" Array in javascript");
let marks = [97,89,72,50];
console.log(marks);
console.log(typeof marks);
console.log(marks.length);
console.log(marks[2]);
console.log(marks[10]);
marks[2] = 80;
console.log(marks);
marks[5] = 12;
console.log(marks);
for(let i of marks){
    console.log(i);
}
let stuMarks = [85,97,44,37,76,70];
let sum = 0;
for(let val of stuMarks){
    sum += val;
}
let avg = sum/stuMarks.length;
console.log(`Avarage marks of students is : ${avg}`);

let prices = [250,645,300,900,50];
console.log(`Before offer prices are : ${prices}`);
for(let i =0; i<prices.length; i++){
    prices[i] = prices[i] - prices[i] * 0.1;
}
console.log(`After 10% offer prices are : ${prices}`);
// arrays methods
prices.push(60,45);
console.log(prices);
console.log(`deleter item price : ${prices.pop()}`);
console.log(prices);
console.log(prices.toString());
//
let fruits = ["apple","banana","Mango"];
let vagtables = ["Broccoli","Coliflower"];
let grains = ["corn","rice"]
let meals = fruits.concat(vagtables,grains);
console.log(meals);
fruits.unshift("lichi","orange");
console.log(fruits)
fruits.shift();
console.log(fruits);
console.log(fruits.slice(1,3));

// splice method it works for add element , remove element and replace method.

let num = [1,2,3,4,5,6,7];
num.splice(2,0,9,10)// add element
console.log(num);
num.splice(2,2);// remove element
console.log(num);
num.splice(3,2,9,10);// replace
console.log(num);
num.splice(3);
console.log(num); //slice from index

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","NetFlix"];
console.log(companies.shift());
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
companies.push("google");
companies.push("Facebook");
console.log(companies);



