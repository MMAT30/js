"use strict"

// normal function
const f1 = function(str) {
    console.log(str)
}


// arrow function
const f2 = (str) => {
    console.log(str)
}


// default parameters
const f3 = (str = "default") => {
    console.log(str)
}

f1("f1 function")
f2("f2 function")
f3("f3 function")
