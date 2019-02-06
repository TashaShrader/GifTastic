$("button").on("click", function () {
    event.preventDefault();
    var animal = $(this).attr("data-animal");
    console.log("hello");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < 9; i++) {
                var rating = results[i].rating;
                var p = ("Rating: ", rating);

                var stillImage = $("<img>");
                stillImage.attr("src", results[i].images.fixed_height_still.url);
                stillImage.addClass("still");

                var animatedImage = $("<img>");
                animatedImage.attr("src", results[i].images.fixed_height.url);
                animatedImage.addClass('animated');

                $("#content").prepend(stillImage);
                $("#raitings").prepend(p);

            

             

                $(stillImage).on("click", function(){
                    $("#still").attr("#animated");
                    $(this).remove();
                    $("#content").prepend(animatedImage);
                })
                $(animatedImage).on("click", function(){
                    $("#still").attr("#still");
                    $(this).remove();
                    $("#content").prepend(stillImage);
                })
        

            }

        })
         

})
