const accountId=144553
let accountEmail="abc@gmail.com"
var accountPassword="12345";

/* prefer not to use var because of issue in 
 block scope and functional scope */


accountCity="Ahmedabad"
let accountState;

// accountId=2 - not allowed. cannot assign value twice to a conatant 
console.log(accountId);

accountEmail="xyz@gmail.com"
accountPassword="234"
accountCity="Jaipur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])