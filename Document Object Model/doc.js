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
let q = document.querySelector("p");
console.log(q);
let q2 = document.querySelectorAll("p");
console.log(q2);
