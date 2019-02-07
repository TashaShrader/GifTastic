$(document).on("click", "#addDog", function () {
    var dogType = $("#dogType").val().trim();
    var newDog = $("<button>");
    newDog.attr("data-animal", dogType);
    newDog.html(dogType);
    newDog.addClass("one");
    $("#buttonLand").append(newDog);
})



    

$(document).on("click", ".one", function () {
    $("#gifPlace").empty();
    event.preventDefault();
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < 9; i++) {
                
                $("#gifPlace").append("<p>", "Rating: ", results[i].rating, "</p>");
                var dogGif = $('<img>');
                dogGif.attr('src', results[i].images.fixed_height_still.url);
                dogGif.attr('data-still', results[i].images.fixed_height_still.url);
                dogGif.attr('data-animate', results[i].images.fixed_height.url);
                dogGif.addClass('gif');

                dogGif.attr('data-state', "still");

                $("#gifPlace").append(dogGif);

                $(dogGif).on("click", function () {
                    var state = $(this).attr('data-state');
                    if (state == 'still') {
                        $(this).attr('src', $(this).data('animate'));
                        $(this).attr('data-state', 'animate');
                    } else {
                        $(this).attr('src', $(this).data('still'));
                        $(this).attr('data-state', 'still');

                    }


                })




            }
        })

})

