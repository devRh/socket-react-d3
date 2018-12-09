const io = require('socket.io')();

const port = process.env.PORT || 5000;

io.on('connection', (client) => {
  client.on('subscribeToDataSender', (interval) => {
    console.log('client is subscribing to data sender with interval ', interval);
    setInterval(() => {
      client.emit('dataSender', [11, 12, 13, 14, 15].map(data => {
        return (Math.ceil(Math.random() * data))
      }));
    }, interval);
  });
});

io.listen(port);
console.log('listening on port ', port);