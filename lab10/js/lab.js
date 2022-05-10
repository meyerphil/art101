// Lab 10 JavaScript Events and Forms
// Practice using JS events and other gadgets
// @link   https://meyerphil.github.io/art101/lab10/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  5.10.22

// declare function

function sortName(){ // sorts letters of given name
    // get name
    var userName = document.getElementById("user-name").value;

    // sort name and set output
    document.getElementById("output").innerHTML = userName.split('').sort().join('');

}

// add listener
document.getElementById("my-button").addEventListener("click",sortName)
