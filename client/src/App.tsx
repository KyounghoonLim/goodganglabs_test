import React, { useState, useEffect } from 'react';
import './App.css';
import ModalPotal from './components/ModalPotal';
import UserNameInputModal from './components/UserNameInputModal';
import Connect from './components/Connect';

function App() {
  const [modalOn, setModalOn] = useState(false)
  const [user, setUser] = useState({})
  const [connection, setConnection] = useState(false)

  useEffect(() => {
    if (!Object.keys(user).length){
      return
    }
    else {
      setModalOn(false)
      setConnection(true)
    }
  }, [user])
  

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setModalOn(!modalOn)}>modal test</button>
        <ModalPotal>
          {modalOn && <UserNameInputModal user={user} setUser={setUser} />}
        </ModalPotal>
      </header>
      {connection && <Connect user={user} />}
    </div>
  );
}

export default App;
