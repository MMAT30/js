"use strict"

class Person {

    // public

    // private - #private
    #first
    #last

    constructor(first, last, age, friends) {
        this.#first = first
        this.#last = last
        this.age = age
        this.friends = friends
    }

    setFirst(first) {
        // setting private variables
        this.#first = first
    }
    
    setLast(last) {
        // setting private variables
        this.#last = last
    }

    setAge(age) {
        this._age = age
    }

    addFriend(friend) {
        this._friends.push(friend)
        return friend
    }

    getFullName() {
        // accessing private methods
        return `${this.#getFirst()} ${this.#getLast()}`
    }

    getAge() {
        return this._age
    }

    getFriends() {
        return this._friends
    }


    // private methods
    #getFirst() {
        return this.#first
    }

    #getLast() {
        return this.#last
    }

}

class Worker extends Person {
    constructor(first, last, age, friends, job) {
        super(first, last, age, friends)
        this._job = job
    }
    
    setJob(job) {
        this._job = job
    }

    getJob() {
        return this._job
    }
}


// creating objects
const p1 = new Person("Billy", "Bob", 777, ["Joe", "Greg", "Ted"])
const w1 = new Worker("Joe", "Smith", 777, ["Billy", "Greg", "Ted"], "Programmer")
console.log(p1)
console.log(w1)


// accessing methods
console.log(p1.getFullName())
console.log(w1.getFullName())
