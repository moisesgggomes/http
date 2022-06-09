const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Hello, World!</h1>");
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is running on ${port} http://localhost:${port}`));