 const http = require('http');


/*
 The createServer method allows us to create a server, it requires a request and a response.
 When a request is received the response will be triggered

*/
 const server = http.createServer((req,res) => { 
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title> </head>')
    res.write('<body><h1>Hello from my first Node.js server WOOHOO!!!!!</h1></body>')
    res.write('</header>')
    res.write('</html>')
    res.end();
 }) 

// The server that we've made above requires a method to be callede on it which tells it to listen for users that enter localhost(3000) <-- we define the port
 server.listen(3000)