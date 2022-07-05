const http = require("http");
const app = require("./app");
const createWsServer = require('./ws')

const server = http.createServer(app);
createWsServer(server);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("App listening on ", port);
});