let btn1 = document.querySelector(".btn");
btn1.onclick = (evt) =>{
    console.log("button is clicked");
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX);
    console.log(evt.clientY);
}
let div = document.querySelector(".div");
div.onmouseover = () =>{
    console.log("you are inside div");
    div.style.backgroundColor = "green"
}

const handeler1 = div.addEventListener("click",()=>{
   console.log("div is clicked");
});
const handeler2 = div.addEventListener("click",()=>{
    console.log("div is clicked2");
 });

 div.removeEventListener("click",handeler2);

 let toggle = document.querySelector("#toggle");
 let body = document.querySelector("body");

 let mode = true;
 toggle.addEventListener("click", () =>{
    if(mode){
        body.style.backgroundColor = "white";
        mode = false;
     }else{
        body.style.backgroundColor = "black" ;
        mode = true;
     }
 });