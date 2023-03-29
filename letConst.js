// const PI =3.14

// var can be mutated outside of its block let is held to the block assignment
// var can be manipulated and const remains the same always it was not be changed
// ?
// declaring variables before they are used in a function

// const arr = [1, 2, 3, 4];
// let total = arr.reduce(function (accum, nxtnum) {
//     console.log(accum, nxtnum)
//     return accum + nxtnum
// }, 0)

// let multiple = arr.reduce(function(accum, nxtnum){
//     return accum * nxtnum;
// })
// const double = arr => arr.map(val => val * 2);

// const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }
// function filterOutOdds() {
//     const nums = (...arguments)
//   return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }
// const findMin = (...args) => Math.min(...args)

// const merge = (obj1, obj2) => ({ ...obj1, ...obj2 })

// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]



// const removeRandom = items => {
//     let idx = Math.floor(Math.random() * items.length);
//     return [...items.slice(0, idx), ...items.slice(idx + 1)];
// }



// const extend = (array1, array2) => {
//     return [...array1, ...array2];
// }



// const addKeyVal = (obj, key, val) => {

//     let newObj = { ...obj }
//     newObj[key] = val;
//     return newObj;
// }

// const removeKey = (obj, key) => {

//     // OPTION 1
//     let newObj = { ...obj }
//     delete newObj[key]
//     return newObj;
// }


// const combine = (obj1, obj2) => {
//     return { ...obj1, ...obj2 };
// }


// const update = (obj, key, val) => {
//     let newObj = { ...obj }
//     newObj[key] = val;
//     return newObj;
//

// function createInstructor(firstName, lastName) {
//     return {
//         firstName,
//         lastName
//     }
// }

// let favoriteNumber = 42;

// const instructor = {
//     firstName: "Colt",
//     [favoriteNumber]: "That is my favorite!"
// }


// const instructor = {
//     firstName: "Colt",
//     sayHi() {
//         return "Hi!";
//     },
//     sayBye() {
//         return this.firstName + " says bye!";
//     }
// }

// function makeAnimal(species, verb, noise) {
//     return {
//         species,
//         [verb]() {
//             return noise;
//         }
//     }
// }

8
1846

yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

Your name is Alejandro and you like purple
Your name is Melissa and you like green
Your name is undefined and you like green

Maya
Marisa
Chi

"raindrops on roses"
"whiskers on kittens"
["Bright copper kettles",
"warm woolen mittens",
    "Brown paper packages tied up with strings"];

10, 30, 20

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { a, b } = obj.numbers

[arr[0], arr[1]] = [arr[1], arr[0]]

raceResults(["Corn", "Mary", "Kay", "Marcie"])
const raceResults([first, second, third, ...rest]) => ({ first, second, third, rest })