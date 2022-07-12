import React, { useEffect } from 'react'
import {connectToSocket, createSender} from '../services/Connect'

export default function RoomPage({user}: any) {
  useEffect(() => {
    connectToSocket(user)
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    .then(stream => {
      console.log(stream)
    })
  }, [])

  return (
    <div>RoomPage</div>
  )
}
