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

//call back hell

function getData(data, getNextData){
    
    setTimeout(()=>{
     console.log("data",data);
   if(getNextData){
    getNextData();
   }
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});

