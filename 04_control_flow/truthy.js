const userEmail = "h@itesh.ai"

if(userEmail){
    console.log("Got user Email")
}
else{
    console.log("Don't have user email")
}


//falsy value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 


//truthy value
"0" , 'false' , " " , []  , {} , function(){}

//nullish coalscing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20





console.log(val1)


//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")