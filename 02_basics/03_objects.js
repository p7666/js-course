//singleton
// Object.create

//object literals

const JsUser = {
    name : "hitesh",
    age :18,
    location: "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    LostLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())