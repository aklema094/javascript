//asynchronous
console.log("one");
console.log("Two");
setTimeout(()=>{
console.log("Hello")
},4000);
console.log("three");
console.log("four");
//call back
function sum(a,b){
    console.log("sum : ",(a+b));
}
function calculator(a,b, sumCallBack){
    sumCallBack(a,b);
}
calculator(10,5,sum);
