import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Connect({user: {userName, roomName}}: any) {
  function connectToSocket(){
    const socket = io('http://localhost:4000/');

    /// send data to socket ///
    socket.emit('join room', roomName)

    /// recive data from socket ///
    socket.on('joined', message => {
      console.log(message)
    })
  }

  connectToSocket()
  
  return <></>
}
