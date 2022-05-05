// Lab 9 JS for the Web
// Practice using JS DOM on the digital page
// @link   https://meyerphil.github.io/art101/lab8/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  5.5.22

// declaration
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("p");

// edits
new1El.innerText = "Element 1: Created element from code!!!!!!!!!!!!!";
new2El.innerText = "Element 2: This is cool! :)";

// appends to page
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// modify existing elements on page
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");

p1.style.color = "green";
p1.style.fontSize = "20px";

p2.style.color = "red";
p2.style.fontSize = "15px";

p3.style.color = "blue";
p3.style.fontSize = "30px";

p4.style.color = "purple";
p4.style.fontSize = "50px";

