import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Connect({user: {userName, roomName}}: any) {
  const [conn, setConn] = useState(false)

  useEffect(() => {
    setConn(true)
  }, [])

  useEffect(() => {
    if (!conn){
      return
    }
    else {
      connectToSocket()
    }
  }, [conn])

  function connectToSocket(){
    const socket = io('http://localhost:4000/')
    /// send data to socket ///
    socket.emit('join room', userName, roomName)

    /// recive data from socket ///
    socket.on('server message', message => {
      console.log(message)
    })

    socket.on('alert message', message => {
      alert(message)
    })
  }
  
  return <></>
}
