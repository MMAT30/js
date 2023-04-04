"use strict"
const process = require("process")


const args = process.argv

// 
if (args.length <= 2) {
    console.log("No Args Passed Into Program")
    process.exit(1)
}

console.log("Args: ", args.length)
args.forEach((arg) => {

    console.log(arg)
})
