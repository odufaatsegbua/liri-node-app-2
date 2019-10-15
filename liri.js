// this code is required to
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,
});

var actionCommand = process.argv[2];
var commandResult = process.argv[3];

switch (actionCommand) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThis()
        break;

    case "movie-this":
        movieThis()
        break;

    case "do-what-it-says":
        whatever();
        break;
}



function spotifyThis() {
    console.log("spotify")
    spotify.search({ type: 'track', query: commandResult }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].name);
        // console.log(data.tracks.items[0].album.name);
        // console.log(data.tracks.items[0].artist[0].name);
        // console.log(data.tracks.items[0].preview_url);  
    });

}















// 