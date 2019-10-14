// this code is required to
require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
 
var spotify = new Spotify({

    
    id: keys.spotify.id,
    secret: keys.spotify.secret,
  });

  spotify.search({ type: 'track', query: 'Hotline Bling' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items); 
  });






// var actionCommand = process.argv[2];
// var commandResult = process.argv[3];







// if (firstCommand === "total") {
//     fs.readFile("bank.txt", "utf8", function (error, data) {
//         if (error) {
//             return console.log(error)
//         }

//         var entries = data.split(",")
//         // console.log(entries)
//         var total = 0;
//         for (let i = 0; i < entries.length; i++) {
//             const entry = entries[i];
//          total = total + parseFloat(entry)
//         }

        
//         console.log(total) 
//     });
// } else if (firstCommand === "deposit") {
//     fs.appendFile("bank.txt", ","+returnAmount, function(err) {

//         // If an error was experienced we will log it.
//         if (err) {
//           console.log(err);
//         }
      
//         // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//         else {
//           console.log("succesful deposit");
//         }
      
//       });
        
// } else if (firstCommand === "withdraw") {
//     fs.appendFile("bank.txt", ","+-returnAmount, function(err) {

//         // If an error was experienced we will log it.
//         if (err) {
//           console.log(err);
//         }
      
//         // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//         else {
//           console.log("succesful withdraw");
//         }
      
//       });
        
// }

