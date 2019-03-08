var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: '1c32fc269c25412784662ebd26771427',
  secret: '3383eab3ab9c47c6b0443636444d8981'
});

var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "what would you like to search?",
      choices: ["movie", "concert", "song"],
      name: "search"
    },
    {
      type: "input",
      message: "name that search?",
      name: "name"
    }
])
    if (inquirerResponse.search === "song") {
     
    spotify.search({ type: 'track', query: inquirerResponse.name }),

    function(data, err) {
     
        // if (!songTitle) {
        //   songTitle = "the sign";
        //   console.log("the sign");
       
        // console.log(data.tracks.items[0].album.artists[0].name);
        // console.log(data.tracks.items[0].name);
        // console.log(data.tracks.items[0].external_urls.spotify);
        // console.log(data.tracks.items[0].album.name);
     if(err) {
       console.log(err);
     }
     else {
        console.log(data);
     }
      };
    
  }

