"use strict";
// abstract class - can not be instantiated but can be inherited and defined later
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private - can only be accessed by the class
        // protected - can be accessed by the class and the inherited classes
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// inheritance for a singleton class
class ITDepartment extends Department {
    // private constructor to prevent creating an object
    constructor(id, admins, computers) {
        super(id, "IT");
        this.admins = admins;
        this.computers = computers;
        this.computers = computers;
    }
    // singleton method
    static getInstance() {
        // if instance already exists, return it
        if (ITDepartment.instance) {
            return this.instance;
        }
        // if instance does not exist, create it
        this.instance = new ITDepartment("d1", ["Ted"], 12);
        return this.instance;
    }
    describe() {
        console.log(`IT Department - computers: ${this.computers}`);
    }
    get getComputers() {
        return this.computers;
    }
    set setComputers(num) {
        this.computers = num;
    }
    // static methods can be accessed without creating an object
    static createEmployee(name) {
        return { name: name };
    }
}
// static members can be accessed without creating an object
ITDepartment.fiscalYear = 2020;
// calling static method
const employee1 = ITDepartment.createEmployee("Ted");
console.log(employee1);
console.log(ITDepartment.fiscalYear);
// creating inherited object
const it = ITDepartment.getInstance();
// calling inherited object methods
it.describe();
it.addEmployee("Greg");
it.addEmployee("Sam");
it.describe();
it.printEmployeeInformation();
// calling setters and getters
it.setComputers = 15;
console.log(it.getComputers);
