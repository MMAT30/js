"use strict"


const s1 = new Set()


// adding to set
console.log(s1.add("one"))
console.log(s1.add("one"))
console.log(s1.add("one"))
console.log(s1.add("two"))
console.log(s1.add("two"))
console.log(s1.add("two"))
console.log(s1.add("three"))
console.log(s1.add("three"))
console.log(s1.add("three"))


// size
console.log(s1.size)


// getting values
console.log(s1.has("one"))
console.log(s1.has("two"))
console.log(s1.has("three"))

// deleting values
console.log(s1.delete("three"))


// entries
console.log(s1.entries())

// keys
console.log(s1.keys())

//values

console.log(s1.values())




// // methods
// console.log(m1.size)
// console.log(m1.has("three"))
