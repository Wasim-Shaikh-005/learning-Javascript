//two types :- stack , heap

// primitive data types use stack memory
//non-primitive data types use heap memory


// in stack memory we are served copy of the original data  so when we update a piece of data the original data is not updated
// in heap memory we are served the rreference of the original data so when we update a piece of data the original data is updated

//-------------------------------------------------------

// //example of stack memory

// let nameOne="wasim"

// let nameTwo=nameOne

// nameTwo="wasim shaikh"

// console.log(nameOne);
// console.log(nameTwo);


//---------------------------------------------------------------------------


//example of heap memory


let userOne={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="wasim@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);