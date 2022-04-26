// Lab 6 Arrays and Objects
// Practice using arrays and objects in JS.
// @link   https://meyerphil.github.io/art101/lab6/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  4.26.22

//declare and init.
myTransport = ["car","bus","train"];

myMainRide = {
    make : "Dodge",
    model : "Challenger",
    color : "Black",
    year : 2019,
    ownIt : false,
    age : function() {
        return 2022 - year;
    }
}

//output
document.writeln("My options of transport: " + myTransport + "<br>");

document.writeln("My usual ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

    