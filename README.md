# liri-node-app-2

The Liri app is a CLI. This app will let a user query multiple sets of data from different APIs.

This app could be used to find specific data regarding the most recent upcoming concert for an artist. See - Band In Town

A spotify search based off song name. See - Spotify

A movie search based off movie title. See - OMDB

This App was built with the following technologies and APIs:
Node
Node Package - Axios
Node Package - DotEnv
Node Package - Moment
Node Package - Spotify API
API - Spotify
API - OMDB
API - Bands In Town

The functionality of this app is based on four commands. These commands are powered by switch case functions, meaining each of the four commands used in this app has their own function.

concert-this

spotify-this-song

movie-this

do-what-it-says

Getting Started
To get a local copy up and running follow these simple steps.

Installation
Clone the repo
git clone https://github.com/odufaatsegbua/liri-node-app-2.git
Install NPM packages
npm install
Create an .env to hide your own API keys you will need to run this app.
# Spotify API keys
SPOTIFY_ID= (ID here)
SPOTIFY_SECRET= (Secret here)

Usage
To run each command, type in node liri.js <your command> <search term> into the terminal.

What Each Command Will Do
concert-this - Uses the Bands in Town API to find data on specific artists' events.
spotify-this-song - Uses the Spotify API to find data on a specific artist or song.
movie-this - Uses the OMBP API to find data on a specific movie.
do-what-it-says	Uses the command line to Runs the cmd text and search term in random.txt
concert-this (artistName)
This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")

spotify-this-song (songName)
This will show the following information about the song in your terminal/bash window

Artist(s):
The song's name:
A preview link of the song from Spotify:
The album that the song is from:

movie-this (movieName)
This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.

do-what-it-says
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the random text in random.txt file.
Edit the text in random.txt to test out the feature for movie-this, spotify-this-song and concert-this.


Odufa Atsegbua -- App Developer for liri-node-app-2

Project Link: https://github.com/odufaatsegbua/liri-node-app-2







2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

