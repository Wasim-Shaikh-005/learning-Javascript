// const myArr = [0,1,2,3,4,5]

// //read mdn documentation on array
// //java script array copy operations create shallow copies

// const myHeros = ['ironman', 'spiderman']

// const myArr2 = new Array(1,2,3,4) //type on console to check properties

// console.log(myArr[1])


//-------------------------Array Methods--------------------------

const myArr = [0,1,2,3,4,5]
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
//-----------------------------------------------
// myArr.unshift(9)//inserts value in starting
// console.log(myArr)

// myArr.shift()//removes first element
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(8))
// console.log(myArr.indexOf(8))
// console.log(myArr.indexOf(3))
//-----------------------------------------------
// const newArr = myArr.join()//binds array elements in string format

// console.log(newArr)
// console.log(typeof newArr)


//----------------------------------------------------------------------------

//slice,splice

console.log("a ",myArr)

const myn1= myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1,3)
console.log("c ",myArr)
console.log(myn2);

