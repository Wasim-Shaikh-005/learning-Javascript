// primitive data types(call by value)

/*
7 types:
string
number
boolean
null
undefined
symbol
BigInt
*/

//non primitive(call by reference)
//array , objects , functions


// javascript is a dynamically types language not a statically typed language


//--------------------------------------------------------------------------

// const id=Symbol('123')
// const anotherId= Symbol('123')

// console.log(id==anotherId)

//-------------------------------------------------------------

const heros= ['ironman','captain america','hulk']

let myObject={
    name: 'wasim',
    age: 18,
}

//saving a function in a variable

const myFunc= function(){
    console.log("Hello World")
}



//study link: https://262.ecma-international.org/5.1/#sec-11.4.3