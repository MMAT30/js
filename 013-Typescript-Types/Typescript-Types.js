"use strict";
var _a;
// number
const num = 1;
console.log(num, typeof num);
// string
const str = "Hello";
console.log(str, typeof str);
// boolean
const bool = true;
console.log(bool, typeof bool);
// object
const obj = { name: "John", age: 30 };
console.log(obj, typeof obj);
// array
const arr1 = [1, 2, 3];
console.log(arr1, typeof arr1);
// tuple
const tpl = ["Hello", 1];
console.log(tpl, typeof tpl);
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
console.log(Role.ADMIN, Role.USER, Role.AUTHOR);
// any
const arr2 = [1, "2", true];
console.log(arr2, typeof arr2);
// union
let un = 1;
un = "Hello";
console.log(un, typeof un);
// literal
const lit = "something";
console.log(lit, typeof lit);
// unknown - more restrictive than any, must be checked before use
let unk;
if (typeof lit === "string") {
    unk = lit;
}
console.log(unk, typeof unk);
const myType = 1;
console.log(myType, typeof myType);
// optional chaining
const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
// if person.address exists then log person.address.street
console.log((_a = person.address) === null || _a === void 0 ? void 0 : _a.street);
