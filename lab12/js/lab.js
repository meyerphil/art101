// Lab 12 Conditionals
// Practice using conditions and if statements
// @link   https://meyerphil.github.io/art101/lab12/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  5.17.22

// choose which HP house depending on name length

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor";
    } else if (mod == 1) {
        return "Ravenclaw";
    } else if (mod == 2) {
        return "Slytherin";
    } else if (mod == 3) {
        return "Hufflepuff";
    }
}

var button = document.getElementById("button");
button.addEventListener("click", function () {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    document.getElementById("output").innerHTML = 
    "<p>The Sorting Hat has sorted you into " + house + ".</p";
});


