//  Primitive

// 7 types : String, Number, Booolen, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference(Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj" , "doga"]
let myObj = {
    name : "hitesh",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
    
}


let myYoutubename = "javascriptWorld"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);