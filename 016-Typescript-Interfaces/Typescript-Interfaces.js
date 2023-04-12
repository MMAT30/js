"use strict";
// defining a variable that holds a function of interface type
let addFn;
// assigning a function to the variable that fits the interface
addFn = (n1, n2) => {
    return n1 + n2;
};
console.log(addFn(2, 3));
// classes can implement multiple interfaces
class Person {
    // optional argument in constructor
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
// creating a variable that holds a greatable interface
let user1;
// we can assign the person class to the user since it implements the interface
user1 = new Person(30, "Ted");
console.log(user1);
// implementation of the interface
const user2 = {
    name: "Ted",
    age: 30,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
console.log(user2);
// create an object of the new type || interface
const e1 = {
    name: "John",
    privileges: ["create-server"],
    startDate: new Date()
};
console.log(e1);
const TypeCheck = (obj) => {
    // checking for a property exists in an object
    if ("privileges" in obj) {
        console.log("I'm A Admin");
    }
    else {
        console.log("I'm A Employee");
    }
};
TypeCheck(e1);
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character"
};
console.log(errorBag);
