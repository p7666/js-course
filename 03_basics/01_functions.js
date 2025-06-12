function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}
// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2
}
const result= addTwoNumbers(3,4)
// console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200 , 400 ,500))

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username : "hitesh",
    price : 199
})

const getNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(getNewArray))
console.log(returnSecondValue([2000,5950,600,3000]))



