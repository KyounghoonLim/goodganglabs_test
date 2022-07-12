const express = require('express');

const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

/// server logics ///
io.on('connection', (socket) => {
  socket.on('join-room', (userName, roomName) => {
    if (!canIJoinThisRoom(roomName)){
      socket.emit('alert-message', `room-${roomName} is full`)
    }
    else {
      socket.join(roomName);
      socket.data.user = {userName, roomName}

      const room = getRoomMembers(roomName)
      console.log(`room-${roomName} members: ${room}`)
      socket.to(roomName).emit('joined', room)
      socket.to(roomName).emit('server-message', `${userName} is joined room-${roomName}`);
    }
  });

  socket.on('disconnect', () => {
    try {
      const {userName, roomName} = socket.data.user
      socket.to(roomName).emit('server-message', `${userName} is leaved room-${roomName}`)
    }
    catch {
      // pass
    }
    finally {
      socket.emit('alert-message', 'you just leaved session')
    }
  })
});

/// server methods ///
/// several rooms are allow 3 people maximum ///
function canIJoinThisRoom(roomName){
  const room = io.sockets.adapter.rooms.get(roomName)
  return room ? room.size < 3:true
}

function getRoomMembers(roomName){
  const room = io.sockets.adapter.rooms.get(roomName)
  return Array.from(room)
}


/// server on ///
server.listen(4000, () => {
  console.log('listening on 4000');
});