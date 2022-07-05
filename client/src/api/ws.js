import {io} from 'socket.io-client';

const socket = io('ws://localhost:5000', {
  auth: {userId: '123'},
  transports: ["websocket"]
});

socket.on('hello', (data, param) => {
  console.log('server said hello', data, param);
  socket.emit('hello', "from client")
});

socket.on('newMessage', (newMsg) => {
  const sub = subscribers.find(sub => sub.eventName === 'newMessage')
  sub.callback(newMsg)
});

const subscribers = [];

export const addSubscriber = (eventName, callback) => {
  subscribers.push(eventName, callback)
}