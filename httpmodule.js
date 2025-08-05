const http = require("http");
const { text } = require("stream/consumers");

const server = http.createServer((req, res) => {
    console.log("User Hit the Server");
    console.log(req.url);
    res.write(400, {'content': 'text/html'})
    res.end("Home Page");
})

server.listen(5000);