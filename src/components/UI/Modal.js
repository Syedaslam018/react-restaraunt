import React from 'react'
import { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
}
const ModalOverlay = props => {
    return (
            <div className={classes.modal}>
                <div className={classes.content}> {props.children}</div>
            </div>
            
        
    )
}

const Modal = props => {
    const protalElement = document.getElementById('overlays')
  return (
   <Fragment>
   {ReactDOM.createPortal(<Backdrop onClick={props.hideCart}/>, protalElement)}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, protalElement)}
   </Fragment>
  )
}

export default Modal
