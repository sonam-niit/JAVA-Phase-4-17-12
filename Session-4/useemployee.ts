import { Employee } from "./class";

let e1:Employee= new Employee(1,"Alex");
let e2:Employee= new Employee(2,"Bob");

e1.display();
e2.display();
console.log("Get Id of user 1: "+e2.getId())