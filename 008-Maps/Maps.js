"use strict"

const m1 = new Map()


// setting key value pairs
console.log(m1.set("one", 1))
console.log(m1.set("two", 2))
console.log(m1.set("three", 3))


// getting value based on key
console.log(m1.get("one"))
console.log(m1.get("two"))
console.log(m1.get("three"))

// deleting
console.log(m1.delete("three"))


// entries
console.log(m1.entries())

// keys
console.log(m1.keys())

//values
console.log(m1.values())




// methods
console.log(m1.size)
console.log(m1.has("three"))





