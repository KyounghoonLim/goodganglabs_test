import React from 'react';
import ModalPotal from './ModalPotal'
import './Modal.scss'

export default function Modal({children, modalClose}: any) {
  function onModalClose(e: any, cb: any){
    if (e.target.className !== 'modal-background'){
      return
    }
    else {
      cb()
    }
  }

  return (
    <ModalPotal>
      <div className='modal-background' onClick={e => onModalClose(e, modalClose)}>
        <div className="modal-container">
          <div className="modal-header" />
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </ModalPotal>
  );
}
