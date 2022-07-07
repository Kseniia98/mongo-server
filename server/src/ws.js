const { Server } = require("socket.io");
const {wsEventTypes} = require('../src/constants');
const { createMsg } = require("./services/message.service");

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  io.on("connection", (socket) => {
    console.log("some user has connected");

    socket.on(wsEventTypes.SEND_MESSAGE, async (data) => {
      const createdMsg = await createMsg(data)
      io.emit(wsEventTypes.NEW_MESSAGE, createdMsg)
    })
  });
};