import React from 'react';

export default function roomPage() {
  const constraints = {
    audio: true,
    video: false,
  };

  const user = navigator.mediaDevices.getUserMedia(constraints);

  return <div>chattingRoomPage</div>;
}
