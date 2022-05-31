import React from 'react'
import ReactDom from 'react-dom'
import Classes from './Modal.module.css'

// this is black screen in the error modal
const Backdrop = props=>{
return <div className={Classes.backdrop} onClick={props.onClose}></div>
}


// this is content over blackscreenin error modal
const ModalOverlay= props=>{
return <div className={Classes.modal}>
    <div className={Classes.content}>{props.children}</div>
</div>
}

// addess for modal 
const portalElement = document.getElementById('overlays')

//Main function starts from here

function  Modal(props) {
  return (
    <>
    {ReactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    
    </>
  )
}

export default Modal