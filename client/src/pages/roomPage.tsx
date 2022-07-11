import React from 'react'

export default function roomPage() {
  const media = navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false
  })


  return (
    <div>roomPage</div>
  )
}
