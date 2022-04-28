// Lab 7 Function
// Practice using functions in JS.
// @link   https://meyerphil.github.io/art101/lab7/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  4.28.22

// declare function

function sortName(){ // sorts letters of given name
    // get name
    var userName = window.prompt("Enter your name:");

    // sort name and return
    return userName.split('').sort().join('');

}

// msin
document.writeln("Your name sorted: ",
                 sortName(), "</br>");
    