const express = require('express');

const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  socket.on('join room', (roomName) => {
    console.log(socket.rooms);
    console.log(roomName);
    socket.join(roomName);
    socket.to(roomName).emit('joined', 'new user is joined room!');
  });
});

server.listen(4000, () => {
  console.log('listening on 4000');
});
