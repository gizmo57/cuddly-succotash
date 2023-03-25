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
const double = arr => arr.map(val => val * 2);

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)