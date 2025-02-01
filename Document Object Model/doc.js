console.log(window);
console.log(window.document); // log use to print document as a element
console.dir(window.document); // dir use to to  print all properities and method of document 
console.dir(document.body);
document.body.childNodes[2].innerText = "abcd";

//Dom menipulation
//get by id

let id = document.getElementById("h1id");
console.log(id);
console.dir(id);

// get by class

let classname = document.getElementsByClassName("h4class");
console.log(classname);
console.dir(classname);
// get by tag name
let tagname = document.getElementsByTagName("p");
console.log(tagname);
console.dir(tagname);

// query selector

// one(first) element
let q = document.querySelector("p"); // for id we have to use # and class .
console.log(q);
let q2 = document.querySelectorAll("p");
console.log(q2);

console.dir(document.body.firstChild);

// 
console.log("this is children")
let qr = document.querySelector("div").children;
console.log(qr);

let query = document.querySelector(".div");
console.log(query.innerText);
console.log(query.innerHTML);
query.innerHTML = "abcd"; // set innertext

let hh5 = document.querySelector("h5");
console.log(hh5.innerText);
console.log(hh5.textContent);

//q2

let text = document.querySelector("h2");
text.innerText = text.innerText+" from apna college students";
console.log(text.innerText);

//q3
let divs = document.querySelectorAll(".box");
divs[0].innerText = "Div 1" // we can access all like an array
divs[1].innerText = "Div 2"
divs[2].innerText = "Div 3"
console.log(divs[0].innerText);