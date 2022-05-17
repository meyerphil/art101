// Lab 11 Libraries & jQuery
// Practice using external libraries
// @link   https://meyerphil.github.io/art101/lab11/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  5.12.22


// create buttons
var butt1 = $("<button>1.Press</button>");
var butt2 = $("<button>2.Press</button>");
var butt3 = $("<button>3.Press</button>");

// add buttons
$("#challenges").append(butt1);
$("#problems").append(butt2);
$("#output").append(butt3);

// add listeners
butt1.click(function(){
    $("#challenges").toggleClass("special");
});
butt2.click(function(){
    $("#problems").toggleClass("special");
});
butt3.click(function(){
    $("#results").toggleClass("special");
});

