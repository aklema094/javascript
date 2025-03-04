let students = {
    name : "Aklema Sultana",
    age : "27",
    marks : 667,
    printMarks :function (){
        console.log("Marks : ",this.marks);
    }
}
console.log(students);
console.log(students.printMarks());
//creating own prototype
let employees = {
    calText(){
     console.log("Text rate is 10%");
    },
}

let emp1 = {
    salary : 5000,
    calText(){
        console.log("Text rate is 20%");
       },
}
emp1.__proto__ =employees;
console.log(emp1);
console.log(emp1.calText());

class Car {
   constructor(c){
    console.log("Creating new Object");
    this.color = c;
    console.log(this.color);
   }

    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");  
    }
    brand(b){
        this.br = b;
        console.log(this.br);
    }
}
let mycar = new Car("black");
mycar.brand("Toyota");
mycar.start();
let car2 = new Car();
car2.color = "green";
console.log(car2.color);

// inheritance

class Person{
    constructor(name){
        console.log("parent constructor");
        console.log(name);
    }
    eat(){
        console.log("can eat")
    }
    work(){
        console.log("do something!!");
    }
}
class Engeneer extends Person{
    constructor(name){
        super(name);
        console.log("child constructor");
    }
    work(){
        console.log("Build something");
    }
}
let eng = new Engeneer("Akhi");
eng.eat();
eng.work();
// qs
let data = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
     viewData(){
        console.log("Data : ",data);
     }
}
let stu = new User("Aklema","aklema@gmail.com");
class Admin extends User{
    constructor(name,email){
        super(name,email);

    }
    editData(){
      data = "new Edited data";
    }
}
let admin = new Admin("admin","admin@gmail.com");
admin.viewData();
console.log(admin);

// error handelling

let a = 5;
let b = 6;

console.log("A + B",(a+b));
console.log("A - B",(a-b));
try{
    console.log("A / B",(a/c));
}catch(err){
    console.log(err);
}
console.log("A % B",(a%b));
console.log("A * B",(a*b));


let arr = ["apple","mango","banana"];
console.log(arr);