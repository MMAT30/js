"use strict"

const p1 = {
    first: "Billy",
    last: "Bob",
    age: 777,
    friends: ["Joe", "Greg", "Ted"],

    // methods
    getFriends: function () {
        return this.friends
    },

    addFriend: function(friend) {
        this.friends.push(friend)
        return friend
    }
}


// accessing with array notation
console.log(p1["first"])
console.log(p1["last"])
console.log(p1["age"])
console.log(p1["friends"])


// accessing with dot notation
console.log(p1.first)
console.log(p1.last)
console.log(p1.age)
console.log(p1.friends)


// reassigning 
console.log(p1.age = 666)
console.log(p1.last = "Smith")


// methods
console.log(p1.getFriends())
console.log(p1.addFriend("Tom"))


// destructuring objects
const {first, last} = p1
console.log(first, last)

// spreading objects
const newObj = {...p1, new: true}
console.log(newObj)

