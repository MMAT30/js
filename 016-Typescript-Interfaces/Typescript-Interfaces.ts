



// interfaces define the structure of an object
interface Named {

    readonly name?: string; // optional property
    outputName?: string; // optional property
}


// classes can inherit from interfaces
interface Greetable extends Named {

    age: number;

    // abstract methods
    greet(phrase: string): void;
}


// interfaces as function types
interface AddFn {

    // anonymous function structure
    (a: number, b: number): number;
}

// defining a variable that holds a function of interface type
let addFn: AddFn;

// assigning a function to the variable that fits the interface
addFn = (n1: number, n2: number) => {
    return n1 + n2;
}
console.log(addFn(2, 3));


// classes can implement multiple interfaces
class Person implements Greetable {

    // optional property
    name?: string;
    age: number;

    // optional argument in constructor
    constructor(age: number, name?: string, ) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}


// creating a variable that holds a greatable interface
let user1: Greetable;

// we can assign the person class to the user since it implements the interface
user1 = new Person(30, "Ted");
console.log(user1);


// implementation of the interface
const user2: Greetable = {
    name: "Ted",
    age: 30,

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
console.log(user2);


// intersection types || interfaces - combine multiple types || interfaces into one
type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// merge the two types || interfaces into one
type ElevatedEmployee = Admin & Employee;

// create an object of the new type || interface
const e1: ElevatedEmployee = {
    name: "John",
    privileges: ["create-server"],
    startDate: new Date()
}
console.log(e1);


// type guards
type UnknownRole = Admin | Employee;

const TypeCheck = (obj: UnknownRole) => {

    // checking for a property exists in an object
    if ("privileges" in obj) {
        console.log("I'm A Admin");
    } else {
        console.log("I'm A Employee");
    }
}

TypeCheck(e1);


// indexed properties
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email",
    username: "Must start with a capital character"
}
console.log(errorBag);