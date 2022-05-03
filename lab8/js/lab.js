// Lab 8 Anon Function
// Practice using Anon Functions and Callback
// @link   https://meyerphil.github.io/art101/lab8/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  5.3.22

// declare
var numbers = [12,4,3,5,9,7,15]

// checks if inputted number is a multiple of 3
function isMultOfThree(x){
    var results = x % 3;
    return (results == 0);
}

// main 
console.log("MultOfThree(27): " + isMultOfThree(27));
console.log("MultOfThree(8): " + isMultOfThree(8));
console.log("check array: " + numbers + ", are they mult of 3? " + numbers.map(isMultOfThree));
console.log("multiply array by 100: " + numbers.map(function(x){
    return x * 100;
}));

