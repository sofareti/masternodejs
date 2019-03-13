const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>welcome back</h1>");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
});
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`listening on port ${4000}`);
});
