// let score=true


// console.log(typeof score)
// //OR
// console.log(typeof(score))

// let valueInNumber=Number(score) //'N' is capital 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//when score=33   type=number   valueInNumber=33   type=number
//when score=33abc   type=string   valueInNumber=NaN   type=nnumber
//when score=null    type=object   valueInNumber=0   type=number
//when score=undefined   type=undefined   valueInNumber=NaN   type=number
//when score=true/false(boolean)   type=boolean   valueInNumber=1/0   type=number

//-----------------------------------------------------------------------------



// let isLoggedIn=1

// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


//1  => true
//0 => false
//"" => false
//"anything"  => true

//-----------------------------------------------------------------------



// let someNumber=33
// let stringNumber=String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)



//*********************Operations************************** 


// let value= 3;
// let negValue= -value

// console.log(negValue);
// console.log(2**3);//2 raised to 3

//------------------------------------------------------------------

// let str1="hello"
// let str2=" wasim"

// let str3=str1+str2

// console.log(str3);



//------------------------------------------------------------------------


// console.log("1"+2) //12
// console.log(1+"2"); //12
// console.log("1"+2+2)  //122
// console.log(1+2+"2") //32 (1+2)+"2"

// //refer ecma standards


//-----------------------------------------------------------


let gameCounter=100

console.log(++gameCounter);//prefix
console.log(gameCounter++);//postfix
console.log(gameCounter)

// link to study : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion