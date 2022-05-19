// Lab 13 Loops
// Practice using for loops
// @link   https://meyerphil.github.io/art101/lab13/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  5.19.22

function fizzBuzz(){

    var longStr = ""; // hold result of loop

    for (var i = 1; i <= 200; i++){
        var str = i + " "; // create new line

        // add words if multiple
        if(i % 3 == 0){
            str += "Fizz";
        }
        if(i % 5 == 0){
            str += "Buzz";
        }
        if(i % 7 == 0){
            str += "Boom";
        }

        // add ! if any words were added
        if(str.length > i.toString().length + 1){
            str += "!";
        }
        str += "<br>";

        longStr += str; // append line to result string

    }

    $("#output").html(longStr); // add result to page
}

// main
fizzBuzz();