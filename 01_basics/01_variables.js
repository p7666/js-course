const accountId=14443
let accountEmail = "abc@google.com"
var accountPassword = "abc@123"
accountCity = "jaipur"
let accountState;

// accountId=2  //not allowed
accountEmail = "ab@ab.com"
accountPassword = "21212121"
accountCity = "Pune"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])