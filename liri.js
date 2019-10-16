// these codes are required to access all the packages we'll be using
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require('axios');
var fs = require('fs');
 

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,
});

var actionCommand = process.argv[2];
var commandResult = process.argv[3];

switchCommands(actionCommand,commandResult);
function switchCommands(actionCommand,commandResult) {
  switch (actionCommand) {
    case "concert-this":
        concertThis(commandResult);
        break;

    case "spotify-this-song":
        spotifyThis(commandResult)
        break;

    case "movie-this":
        movieThis(commandResult)
        break;

    case "do-what-it-says":
        whatever(commandResult);
        break;
}
};

function spotifyThis(commandResult) {
    console.log("spotify")
    spotify.search({ type: 'track', query: commandResult }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].album.artists[0].name);
        // console.log(data.tracks.items[0].preview_url);  
    });

}

  // axios.get('http://img.omdbapi.com/?apikey=trilogy&t=up')
 function movieThis(commandResult){
  var queryUrl = "http://www.omdbapi.com/?t=" + commandResult + "&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl)
  .then(function (response) {
    // handle success
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
 
    console.log("Title: " + response.data.Title);
    console.log("Year: " +response.data.Year);
    console.log("MPAA Rating: " +response.data.Rated);
    console.log("Actors: " +response.data.Actors);
    console.log("Plot: " +response.data.Plot);
    console.log("Language: " +response.data.Language);
    console.log("Rotten Tomatoes Rating: " +response.data.Ratings[1]);
    console.log("IMDB Rating: " +response.data.imdbRating);


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 }

 function concertThis(commandResult){
  // var queryUrl = "https://rest.bandsintown.com/artists/chris%20brown/events?app_id=codingbootcamp"
  console.log(encodeURIComponent(commandResult))
  var queryUrl = "https://rest.bandsintown.com/artists/" + encodeURIComponent(commandResult) + "/events?app_id=codingbootcamp"
  axios.get(queryUrl)
   .then(function (response) {
     // handle success
     for (let i = 0; i < response.data.length; i++) {
       const show = response.data[i];
       console.log(show.venue.name);
       console.log(show.venue.country);
       console.log(show.datetime);
     }
    
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   })
   .finally(function () {
     // always executed
   });
 }
  function whatever(){
fs.readFile("random.txt","utf8",function(err,data){
  var queryStrings = data.split(",")
  switchCommands(queryStrings[0], queryStrings[1])
})
  }



 
  

















// 