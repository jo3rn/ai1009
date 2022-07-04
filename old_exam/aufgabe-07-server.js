const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", function (req, res) {
  const params = new URLSearchParams(req.url.substring(1));
  const name = params.get("name");
  const team = params.get("team");

  const entry = `${name};${team}\n`;
  fs.appendFile("anmeldungen.txt", entry, (err) => {
    if (err) {
      throw err;
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("angemeldet");
    res.end();
  });
});
server.listen(8080);
