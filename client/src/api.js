import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:5000');
function subscribeToDataSender(cb) {
  socket.on('dataSender', data => cb(null, data));
  socket.emit('subscribeToDataSender', 1000);
}
export default subscribeToDataSender ;