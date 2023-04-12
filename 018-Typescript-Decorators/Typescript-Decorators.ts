

// creating a factory decorator that wraps a class contructor
const Logger = (logString: string) => {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}   


// defining a class and attaching the decorator to it
@Logger("LOGGING - PERSON")
class Human {
    name = 'Max';

    constructor() {
        console.log('Creating human object...');
    }
}




// creating an instance of the class
const pers = new Human();





// property decorator
const Log = (target: any, propertyName: string | Symbol) => {
    console.log('Property decorator!');
    console.log(target, propertyName);
}



const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}


const Log3 = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

const Log4 = (target: any, name: string, position: number) => {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}


class Product {

    @Log
    title = 'Book';
    private _price = 19.99;


    constructor() {
        console.log('Creating product object...');
    }


    @Log2
    set price(price: number) {
        if (price > 0) {
            this._price = price;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}





