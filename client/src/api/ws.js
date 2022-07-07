import { io } from "socket.io-client";
import CONSTANTS from "../constants";
const {
  wsEventTypes: { NEW_MESSAGE },
} = CONSTANTS;

export const socket = io("ws://localhost:5000", {
  auth: { userId: "123" },
  transports: ["websocket"],
});

socket.on(NEW_MESSAGE, (newMsg) => {
  const sub = subscribers.find(sub => sub.eventName === NEW_MESSAGE);
  if (sub) {
    sub.callback(newMsg);
  }
});

const subscribers = [];

export const addSubscriber = (eventName, callback) => {
  subscribers.push({ eventName, callback });
}