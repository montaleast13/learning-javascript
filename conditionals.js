const prompt = require('prompt-sync')()

let x = 4
let y = 5

if (y > x) {
console.log("y is greater than x")
}

if (x > y) {
    console.log("x is greater than y")
} else {
    console.log("x is not greater than y")
}

// A program to determine whether it is time to get up

let hour = prompt("What time is it? ")

if (hour < 4){
    console.log("It is the middle of the night so keep sleeping")
} else if(hour > 4 && hour < 7){
    console.log("You can sleep a little  longer")
} else {
    console.log("Why are you still sleeping? Get up!")
}