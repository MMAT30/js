"use strict"

const btn = document.getElementById("btn")
const err = document.getElementById("err")


// btn.addEventListener("click", async (event) => {
//     try {
//         const response = await fetch("https://restcountries.com/v2/nme/portugal")
//         const data = await response.json()
//         console.log(data[0])
//     } catch (err) {
//         alert(err)
//     }
// })



const data = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => { return response.json() })
}

console.log(data)

       
   
console.log(data)