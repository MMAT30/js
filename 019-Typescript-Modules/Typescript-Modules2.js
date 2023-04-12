"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SomethingObject {
    constructor(name) {
        this.name = name;
    }
}
class SomewhereObject {
    constructor(name) {
        this.name = name;
    }
}
const something = new SomethingObject("something");
const somewhere = new SomewhereObject("somewhere");
console.log(something.name);
console.log(somewhere.name);
