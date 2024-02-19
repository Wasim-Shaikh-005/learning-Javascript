// let myDate = new Date()
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toUTCString())

// console.log(typeof myDate)


//--------------------------------------------------------------------

// let myCreatedDate = new  Date(2005, 2 , 1 )
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new  Date(2005, 2 , 1 , 5 , 3 )
// let myCreatedDate = new  Date("2024-01-14")
let myCreatedDate = new  Date("02-20-2023")
// 

//---------------------------------------------------------------------


// let myTimeStamp= Date.now()

// console.log(myTimeStamp)//miliseconds from jan 1 1970
// console.log(myCreatedDate.getTime())
// console.log((Date.now()/1000))//to convert in seconds
// console.log(Math.floor((Date.now()/1000)))//to remove decimal values



//----------------------------------------------------------------------


 let newDate = new Date()
// console.log(newDate.getFullYear())


//using string interpolation
//`${newDate.getDay()} and the time is`

//----------------------------------------------------------------

newDate.toLocaleString('default',{
    month: "2-digit"  //ctrl+space for suggestions
})

console.log(newDate);