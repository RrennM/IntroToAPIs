// let request = require('request');
// request('https://tysonhood.com/', function(error, response, body) {
//     if(!error && response.statusCode == 200) {
//         console.log(body) // Show the HTML for the TysonHood Homepage.
//     }
// })

let request = require('request');
request('https://tysonhood.com', function(error, response, body) {
    if(error) {
        console.log('Something went wrong!');
        console.log(error);
    } else {
        if(!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the TysonHood Homepage.
        }
    }
})