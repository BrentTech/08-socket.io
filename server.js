'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('new connection', socket.id);
  socket.on('speak', => {
    console.log({payload});
    socket.broadcast.emit('message', payload);
  });
});
