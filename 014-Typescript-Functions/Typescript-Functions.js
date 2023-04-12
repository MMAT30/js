"use strict";
// function with parameters and void return type
const add = (a, b) => {
    console.log(a + b);
};
add(2, 2);
// function with return type and typed return value
const sub = (a, b) => {
    return a - b;
};
console.log(sub(2, 2));
// callback function
const doSomething = (someString, callback) => {
    console.log(someString);
    callback(2, 2);
};
doSomething("Callback Called", add);
// fuctions as types
let something;
something = add;
something(2, 2);
// never return type - never returns anything due to error
const throwError = (message) => {
    throw new Error(message);
};
// function implementation
function combine(first, second) {
    if (typeof first === "number" && typeof second === "number") {
        return first + second;
    }
    return first.toString() + second.toString();
}
// nullish coalescing - checks for null or undefined
const someInput = null;
const storedData = someInput !== null && someInput !== void 0 ? someInput : "Default";
console.log(storedData);
