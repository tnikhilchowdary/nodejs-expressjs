const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Welcome to our home page");
    }
    if(req.url === "/about"){
        res.end("Welcome to our home page")
    }
    res.end("End")
})


server.listen(5000);