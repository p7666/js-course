//  Primitive

// 7 types : String, Number, Booolen, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

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