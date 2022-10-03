
alert("wuuuu");
//
// //Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
//
// // function yourArea = (num1,num2,num3){
// //
// //    let yourTri = (num1 + num2 + num3) ;
// //
// //
// //    return yourTri;
// // }
// // console.log(yourArea(8,6,5));
// //
//
//
// //   A= 1/2 * B * H
//
// //Write a JS function that accepts a string and returns the string in reverse.
// // example input: codeup, example output: puedoc
//
//
// let myArray = ["codeup"];
//
// console.log(myArray);
//
//
// function newArray () {
//
//    let rev = myArray.revers;
//
//    return rev;
//
// }
//
// console.log(newArray());
//
//
// /**
//  * the following below is another warm up 👇
//  *
//  *
//  */
// */
// Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
// // example input: [5,8,2,6,9,3,2];
// // expected output: [2,2,3,5,6,8,9] // length: 7
// 2. Write a function that returns the reading status of each of the following books:
//     var library = [
//        {
//           author: 'Bill Gates',
//           title: 'The Road Ahead',
//           readingStatus: true
//        },
//        {
//           author: 'Steve Jobs',
//           title: 'Walter Isaacson',
//           readingStatus: true
//        },
//        {
//           author: 'Suzanne Collins',
//           title:  'Mockingjay: The Final Book of The Hunger Games',
//           readingStatus: false
//        }];

//---------------------------------- assessment excercises
/**
Core competencies assessed

Reading and following directions

Producing solutions that match the problem specification

Using Git and working with GitHub
    Cloning a git repository from GitHub
Creating your own branch
Committing and pushing work to a new branch on GitHub

Programing fundamentals in JavaScript
Working with values, variables, and data types
Using assignment and comparision operators
Working with JS internal functions to make decisions and perform actions.
    Using conditional logic to make decisions inside functions
Writing functions that take in inputs, process, and return outputs.

    Here's some example word problems:
*/

// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false


// function timesFour (x) {
//     if(typeof x == "number"){
//
//
//        return x * 4;
//     }
//     else {
//         return false;
//     }
//
// }
// timesFour()
//
// function timesFour(input) {
//     if (isNaN(input)){
//         return false;
//     }
//     else if (typeof(input)==="number" || parseInt(input)){
//         return Number(input) * 4
//     }
//     else{
//         return false;
//     }
// }
//
//
//
//
//
// // Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// // convertDaystoHours(0) //0
// // convertDaystoHours('5') // 120
// // convertDaystoHours('Texas') //false 👈
// // convertDaystoHours([2, 1, 0]) //false
// // convertDaystoHours(true) //false
// // convertDaystoHours(false) //false
//
// function convertDaystoHours (input) {
//
//     if(isNaN(input)){
//         return false;
//     }
//     else if (typeof(input)==="number" || parseInt(input)){
//         return Number(input) * 24;
//     }
//     else{
//         return false;
//     }
//
// }
//
//
//
//
//
//
// // Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// // calculateTax(25, 8)               // “$27.00"
// // calculateTax(10, 12)             // “$11.20”
// // calculateTax(120, 15.5)           // “$138.60"
// // calculateTax(10, true)           // false
// // calculateTax([1, 2, 3], 10)      // false
// // calculateTax(“Codeup”, 100)      // false
// // calculateTax()                   // false
//
//
// function calculateTax(totalpaid, taxPercent) {
//     let percent = taxPercent / 100;
//     if (isNaN(totalpaid && taxPercent)){
//         return false;
//     }
//     else if (typeof(totalpaid && taxPercent) === "number" || parseInt(totalpaid && taxPercent)){
//         return `$${Number((totalpaid) + (totalpaid * percent)).toFixed(2)} Nice`
//     }
//     else{
//         return false;
//     }
//    // console.log(some);  log + tab
// }
// //__________________________________________________________
// /**
// Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]
// */
// let myArray = [1,2,3,4,5,6,7,8,9,10];
// function findEvenNum () {
//     let a2 = myArray[1];
//     let a4 = myArray[3];
//     let a6 = myArray[5];
//     let a8 = myArray[7];
//     let a10 = myArray[9];
//     let result = [a2,a4,a6,a8,a10];
//     return result;
// }
// /**
// Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
//     example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
//  */
//
// //----------------------------------------------------------------
//
//
// // example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// // expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
//
// let places = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
//
// //---------------
//









// re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }


for (i = 20; i >= 0; i--) {
    console.log(i); i--;
} //✅




// Add ‘strawberry’ to the beginning, middle, and end of the array. var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

fruits.push("strawberry");
fruits.unshift("strawberry");

fruits.splice(4,0, "strawberry");

console.log(fruits)   //✅





