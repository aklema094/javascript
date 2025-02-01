let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newClass"));
// style
let div = document.querySelector(".newDiv");
div.style.backgroundColor = "green";
div.style.fontSize = "25px";

// insert element : append
let btn = document.createElement("button");
btn.innerText = "Click Me";
div.append(btn);

// prepand

let btn2 = document.createElement("button");
btn2.innerText = "Submit";
div.prepend(btn2);
// before
let btn3 = document.createElement("button");
btn3.innerText = "Before";
div.before(btn3);
// after
let btn4 = document.createElement("button");
btn4.innerText = "After";
div.after(btn4);
// remove node
//para.remove();

let p = document.querySelector(".par1");
p.classList.add("par2");

