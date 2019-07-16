 const http = require('http');
const fs = require('fs');

/*
 The createServer method allows us to create a server, it requires a request and a response.
 When a request is received the response will be triggered

*/
 const server = http.createServer((req,res) => { 
     const url = req.url
     const method = req.method;
   if (url === '/') {
  
    res.write('<html>') // the header returns a response with the html that we used .write to make
    res.write('<head><title>Enter Message</title> </head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button> </input> </form></body>')
    res.write('</html>')
    return res.end();
   }

   if(url === '/message' && method === 'POST') {
       const body = [];
       req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
       }) 
       req.on('end', () => { // we use this event listener to work with the chunks of data we gained
        const parsedBody = Buffer.concat(body).toString() // Creates a new buffer with all the chunks received from the req.on and converts it to string
        const message = parsedBody.split('=')[1]; // We take the parsed body split it at the equals sign and store the element on the right side of the =
        fs.writeFileSync('message.txt', message);
       })
        
        res.statusCode= 302;
        res.setHeader('Location', '/')
        return res .end()
   }
   res.setHeader('Content-Type', 'text/html') // allows us to set headers quite self evident
   res.write('<html>') // the header returns a response with the html that we used .write to make
   res.write('<head><title>My First Page</title> </head>')
   res.write('<body><h1>Hello from my first Node.js server WOOHOO!!!!!</h1></body>')
   res.write('</header>')
   res.write('</html>')
   res.end();
 }) 

// The server that we've made above requires a method to be callede on it which tells it to listen for users that enter localhost(3000) <-- we define the port
 server.listen(3000)