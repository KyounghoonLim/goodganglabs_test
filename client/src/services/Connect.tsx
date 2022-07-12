import io from 'socket.io-client';

function connectToSocket({userName, roomName}: any){
  const socket = io('http://localhost:4000/')

  /// send data to socket ///
  socket.emit('join-room', userName, roomName)

  /// recive data from socket ///
  socket.on('joined', users => {
    console.log(users)
    console.log(socket.id)
  })

  socket.on('server-message', message => {
    console.log(message)
  })

  socket.on('alert-message', message => {
    alert(message)
  })
}

function createSender(socket: any, stream: MediaStream){
  let pc = new RTCPeerConnection()
  console.log(pc)
  // pc.onicecandidate(e => {
  //   if (e.candidate){
  //     socket.emit('sender', {
  //       candidate: e.candidate,
  //       senderId: socket.id
  //     })
  //   }
  // })

  // pc.oniceconnectionstatechange(e => {
  //   console.log(e)
  // })
}

export {connectToSocket, createSender};