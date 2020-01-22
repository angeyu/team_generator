//capitalize class name as best practice to note that its a class object
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


class Employee{
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.role = "Employee";
        this.email = email;
    
    };//constructor

    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.role;
    };
    printInfo() {
        console.log(`Role: ${this.role}`);
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        
    };

};//class employee

module.exports = Employee;