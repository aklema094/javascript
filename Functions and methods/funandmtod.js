console.log("Function and Methods");

function myfunction(){
    console.log("Welcome to my fuction");
    console.log("We are learning javascript");
}
myfunction();
function myfunction(msg){
    console.log(msg);
}
myfunction("I love Js");

function sum(x,y){

    return x+y;

}
console.log(sum(5,7));

let arrowFun = (a,b) => {
    return a*b;
};

console.log(arrowFun(10,5));
arrowFun = 10;
console.log(arrowFun);

function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
      
        if(str[i] === 'a'||str[i] ==='e'||str[i] ==='i'||str[i] ==='o'||str[i] ==='u'){
          count++;
        }
    }

    return count;
    
}

console.log("number of vowels are : ",countVowels("hello world"));


let numOfV = (str) =>{
    let count = 0;
    for(let c of str){
        if(c === 'a'|| c ==='e'|| c ==='i'|| c ==='o'|| c ==='u'){
            count++;
          }
    }
    return count;
}
console.log(numOfV("aklema sultana"));
// higher order function or heigher order method

let arr = [1,2,3,4,5,6,7,101,8];
arr.forEach((val,idx,arr) =>{
      console.log(val,idx,arr);
});
arr.forEach((val) =>{
      console.log(val, " Squre :", val**2);
});
let val_1 = (val) =>{
    console.log(val+1);
}
arr.forEach(val_1);

let newArr = arr.map((val)=>{
    return val*2;
});
console.log(newArr);

let evenArr = arr.filter((val) =>{
    return val%2 === 0;
});
console.log(evenArr);

let output = arr.reduce((pre,curr) =>{
 return pre > curr ? pre : curr;
});
console.log(output);


// q1 

let marks = [80,90,100,60,65, 98,94,55,96,95,97,95];

let newMarks = marks.filter((val) =>{
    return val > 90;
});
console.log(newMarks);

let n = prompt("Enter the size of an array : ");

let numArr = [];

for(let i =0; i<n;i++){

    numArr[i] = i+1;

}
console.log(numArr);

let resSum = numArr.reduce((pre,curr) => {
    return pre + curr;
});
console.log("Sum is : ",resSum);
let fact = numArr.reduce((pre,curr) => {
    return pre * curr;
});
console.log("Factorial is : ",fact);