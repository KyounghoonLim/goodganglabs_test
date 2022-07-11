import React, { useState } from 'react'
import Modal from './Modal'

export default function UserNameInputModal({user, setUser, modalClose}: any) {
  const [userName, setUserName] = useState('')
  const [roomName, setRoomName] = useState('')
  
  function userNameChanger(e: any){
    setUserName(e.target.value)
  };

  function roomNameChanger(e: any){
    setRoomName(e.target.value)
  };

  function submitHandler(e: any){
    e.preventDefault()
    setUser({...user, userName, roomName})
  }


  return (
    <Modal modalClose={modalClose}>
      <form className='user-name-form' onSubmit={submitHandler}>
        <label htmlFor="user-name-input">사용자명</label>
        <input type="text" id="user-name-input"
        value={userName} onChange={userNameChanger}
        />
        <label htmlFor="room-name-input">방이름</label>
        <input type="text" id="room-name-input"
        value={roomName} onChange={roomNameChanger}
        />
        <button className='submit-btn'>확인</button>
      </form>
    </Modal>
  )
}
