//promise
function getData(id){
return new Promise((resolve,reject) => {
  setTimeout(()=>{
    console.log("data",1);
    resolve("success");
  },5000)
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

