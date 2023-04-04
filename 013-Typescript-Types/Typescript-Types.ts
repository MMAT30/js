

// number
const num: number = 1;
console.log(num, typeof num);

// string
const str: string = "Hello";
console.log(str, typeof str);

// boolean
const bool: boolean = true;
console.log(bool, typeof bool);

// object
const obj: {name: string, age: number} = { name: "John", age: 30 };
console.log(obj, typeof obj);

// array
const arr1: number[] = [1, 2, 3];
console.log(arr1, typeof arr1);

// tuple
const tpl: [string, number] = ["Hello", 1];
console.log(tpl, typeof tpl);

// enum
enum Role { ADMIN, USER, AUTHOR };
console.log(Role.ADMIN, Role.USER, Role.AUTHOR);

// any
const arr2: any[] = [1, "2", true];
console.log(arr2, typeof arr2);

// union
let un: number | string = 1;
un = "Hello";
console.log(un, typeof un);

// literal
const lit: "something" | "else" | "here" = "something";
console.log(lit, typeof lit);

// unknown - more restrictive than any, must be checked before use
let unk: unknown;
if (typeof lit === "string") {
    unk = lit;
}
console.log(unk, typeof unk);


// type alias
type MyType = string | number;
const myType: MyType = 1;
console.log(myType, typeof myType);