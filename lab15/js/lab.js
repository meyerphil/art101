// Lab 15 AJAX
// @link   https://meyerphil.github.io/art101/lab15/index.html
// @file   This file holds code for lab
// @author Phil Meyer.
// @since  5.26.22

$("#activate").on("click", function () {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://pokeapi.co/api/v2/berry/",
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
                //id: 1,
            },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            // do stuff
            $("#output").html(JSON.stringify(data));
        },
        // What we do if the api call fails
        error: function (textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
});
