const marvel_heros =["thor","ironman","spiderman"];
const dc_heros = ["superman","batman","joker"]

// marvel_heros.push(dc_heros)//it takes array as fourth element instead of merging

// console.log(marvel_heros)

// console.log(marvel_heros[3])
// console.log(marvel_heros[3][0])
//---------------------------------------------------
//marvel_heros.concat(dc_heros) - this will not work as concat returns new array without modifying existing array
const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);
//push adds into existing array while concat returns new array

//------------------------------------------------------
//there is another way to do this

const all_new_heros=[...marvel_heros, ...dc_heros]//this is called spread

// console.log(all_new_heros);
//-----------------------------------------------------

// const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

// const usable_another_array = another_array.flat(1)//can give depth how much you want to sort out
// const usable_another_array2 = another_array.flat(2)
// const usable_another_arrayI = another_array.flat(Infinity)

// console.log(usable_another_array);
// console.log(usable_another_array2);
// console.log(usable_another_arrayI);


//-------------------------------------------------------------------------

console.log(Array.isArray("wasim"))
console.log(Array.from("wasim"))//converts any data type to array

console.log(Array.from({name: "wasim"}));//when it cannot convert it will return an empty array
//you will have to tell if you want to make array from all keys or all values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


//read about array methods-Array.