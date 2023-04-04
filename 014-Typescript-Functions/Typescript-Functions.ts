




// function with parameters and void return type
const add = (a: number, b: number): void => {
    console.log(a + b);
}
add(2, 2);


// function with return type and typed return value
const sub = (a: number, b: number): number => {
    return a - b;
}
console.log(sub(2, 2));


// callback function
const doSomething = (someString: string, callback: (a: number, b: number) => void): void => {
    console.log(someString);
    callback(2, 2);
}
doSomething("Callback Called", add);


// fuctions as types
let something: Function;
something = add;
something(2, 2);

// never return type - never returns anything due to error
const throwError = (message: string): never => {
    throw new Error(message);
}
// throwError("Error"); - uncomment to see error



