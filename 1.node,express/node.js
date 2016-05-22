//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=3000;

//We need a function which handles requests and send response
function handleRequest(request, response){
    // response.end('It Works!! Path Hit: ' + request.url);

    if (request.url == '/') {
        response.end('<html><body><h1>MAIN PAGE</h1></body></html>');
    } else {
        response.end('<html><body><span style="color: red">Wrong adress</span></body></html>');
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
    //console.log(`Server listening on: http://localhost:%s, ${PORT} `);
});
