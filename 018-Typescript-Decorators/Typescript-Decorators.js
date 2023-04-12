"use strict";
// // creating a factory decorator that wraps a class contructor
// const Logger = (logString: string) => {
//     return function (constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// }   
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// // defining a class and attaching the decorator to it
// @Logger("LOGGING - PERSON")
// class Human {
//     name = 'Max';
//     constructor() {
//         console.log('Creating human object...');
//     }
// }
// // creating an instance of the class
// const pers = new Human();
// // property decorator
// const Log = (target: any, propertyName: string | Symbol) => {
//     console.log('Property decorator!');
//     console.log(target, propertyName);
// }
// const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
//     console.log('Accessor decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
// const Log3 = (target: any, name: string, descriptor: PropertyDescriptor) => {
//     console.log('Method decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(descriptor);
// }
// const Log4 = (target: any, name: string, position: number) => {
//     console.log('Parameter decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }
// class Product {
//     @Log
//     title = 'Book';
//     private _price = 19.99;
//     constructor() {
//         console.log('Creating product object...');
//     }
//     @Log2
//     set price(price: number) {
//         if (price > 0) {
//             this._price = price;
//         } else {
//             throw new Error('Invalid price - should be positive!');
//         }
//     }
//     @Log3
//     getPriceWithTax(@Log4 tax: number) {
//         return this._price * (1 + tax);
//     }
// }
const testDecorator = (target, key, desc) => {
    console.log('Target: ', target);
    console.log('Key: ', key);
    console.log('Desc: ', desc);
};
class Boart {
    constructor() {
        this.color = 'red';
    }
    get formattedColor() {
        return `This board has a ${this.color} color`;
    }
    pilot() {
        console.log('swish');
    }
}
__decorate([
    testDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Boart.prototype, "pilot", null);
