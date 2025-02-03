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

