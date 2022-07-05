const { Server } = require("socket.io");

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    //options
  });

  io.on('connection', (socket) => {
    console.log('some user has connected');
  
    socket.on('hello', () => {
      console.log('someone said Hello');
    })
  })
}