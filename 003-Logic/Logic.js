"use strict"

const v1 = true
const v2 = false
const v3 = null


// ternary operator - (condition) ? (true) : (false)
console.log(v1 || v2 ? "true ternary" : "false ternary")


// nullish coalescing operator - (null value) ?? (return value)
console.log(v3 ?? "nullish coalescing operator")


// if - else if - else
if (v1) {
    console.log("if statement")
} else if (!v1) {
    console.log("else if statement")
} else {
    console.log("else statement")
}


// switch - case - break
switch(v2) {
    case true:
        console.log("true case")
        break

    case false:
        console.log("false case")
        break

    default:
        console.log("default case")
        break
}