import React from 'react'
import reactDOM from 'react-dom'

export default function ModalPotal({children}: any) {
  const target = document.getElementById('modal') as HTMLDivElement | null
  return target ? reactDOM.createPortal(children, target):null
}
