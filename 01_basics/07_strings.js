// const name="wasim"
// const repoCount=1

// // console.log(name + repoCount +"value")
// // this method is outdated and not preferred


// console.log(`hello my name is ${name.toUpperCase()} and my repo count is${repoCount}`)
// //called string interpolation
// //backticks are used 
// //this syntax is more readable 

//-----------------------------------------------------------------------

// another way of declaring string

const gameName= new String('Arsenal-05-com')// try doing this in console to see all string methods

console.log(gameName);
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('r'));

const newString= gameName.substring(0,4)// of we try giving neg value on substring it will be ignored
console.log(newString);

const anotherString=gameName.slice(-6,6)//can give negative values in slice
console.log(anotherString);


const newStringOne="    wasim    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url= "https://wasim.com/wasim%20shaikh"

console.log(url.replace('%20','-'))

console.log(url.includes('wasim'))


console.log(gameName.split('-'));//splits string into array based on the '-'