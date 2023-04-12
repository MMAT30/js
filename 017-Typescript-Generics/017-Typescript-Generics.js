"use strict";
// generic function with contraints
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
// merge must take two objects based on the constraints
const newType = merge({ name: "Max" }, { age: 30 });
// generic function with contraints
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
// calling generic function
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
// generic function with contraints and the keyof constraint
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
// calling generic function
console.log(extractAndConvert({ name: "Max" }, "name"));
// generic class
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
// calling generic class with strings
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
// calling generic class with numbers
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
// function with partial generic type
function createCourseGoal(title, description, date) {
    // declaring a partial generic type that with not be empty when returned
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// readonly generic type
const names = ["Max", "Anna"];
// these will not work because names is a readonly generic type
// names.push("Manu");
// names.pop();
console.log(names);
