import React from 'react';
import ModalPotal from './ModalPotal'
import './Modal.scss'

export default function Modal({children}: any) {
  return (
    <ModalPotal>
      <div className='modal-background'>
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
