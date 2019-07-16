 const http = require('http');


/*
 The createServer method allows us to create a server, it requires a request and a response.
 When a request is received the response will be triggered

*/
 const server = http.createServer((req,res) => { 
    console.log(req)
 }) 

// The server that we've made above requires a method to be callede on it which tells it to listen for users that enter localhost(3000) <-- we define the port
 server.listen(3000)