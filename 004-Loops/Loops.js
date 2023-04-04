"use strict"

const arr =  [1,2,3,4]
let cnt1 = 0
let cnt2 = 0

// traditional loop
for (let x = 0; x < arr.length ; x++) {
    console.log(arr[x])
}

// for in - index based
for (let x in arr) {
    console.log(x)
}

// for of - value based
for (let x of arr) {
    console.log(x)
}


// foreach - function based
arr.forEach((x) => {
    console.log(x)
})


// while loop
while(cnt1 < arr.length) {
    console.log(arr[cnt1])
    cnt1++
}


// do - while loop
do {
    console.log(arr[cnt2])
    cnt2++
} while(cnt2 < arr.length)