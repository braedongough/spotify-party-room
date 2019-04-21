import io from "socket.io-client";

let _socket = null;

export const socket = () => {
  return _socket;
};

// The ip or localhost for the socket to work
const initSocket = callback => {
  _socket = io("http://localhost:8888");
  callback();
};

export default initSocket;
