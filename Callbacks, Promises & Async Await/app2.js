//promise
function getData(id){
return new Promise((resolve,reject) => {
  setTimeout(()=>{
    console.log("data",id);
    resolve("success");
  },1000)
});
}

let promise = getData(1);
console.log(promise);

function getPromise(){
    return new Promise((resolve, reject) =>{
       
        console.log("I am promise");
        reject(" network error");
    }); 
}

let pro = getPromise();

pro.then((res)=>{
    console.log(res);
});
pro.catch((error)=>{
    console.log(error);
});

getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
   return getData(3);
}).then((res) =>{
    console.log(res);
});

// async await

async function getalldata() {
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
    await getData(8);
    
}
getalldata();
(async function() {
    await getData(9);
    await getData(10);
    await getData(11);   
})(); 