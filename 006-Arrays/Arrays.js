"use strict"

const a1 = [1,2,3,4,5,6,7]


// accessing array
console.log(a1[0])
console.log(a1[1])
console.log(a1[2])


// reassigning 
console.log(a1[0] = 777)
console.log(a1[1] = 888)


// methods
console.log(a1.push(999))
console.log(a1.pop(999))
console.log(a1.find((x) => x === 3))
console.log(a1.filter((x) => x > 3))


// destructuring arrays
const [first, second, ...theRest] = a1
console.log(first, second, theRest)


// spreading arrays
const newArr = [...a1, 543, 654, 765]
console.log(newArr)