const { Server } = require("socket.io");

const eventTypes = {
  HELLO: 'hello'
}

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    //options
    cors: {
      origin: ['http://localhost:3000/']
    }
  });

  io.on('connection', (socket) => {
    console.log('some user has connected');
    socket.emit(eventTypes.HELLO, { data: 'test'})
  
    socket.on(eventTypes.HELLO, (data, param) => {
      console.log('someone said Hello', data, param);
    })
  })
}