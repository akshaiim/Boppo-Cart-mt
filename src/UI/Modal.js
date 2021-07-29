import React from "react";
import ReactDOM from "react-dom"
import classes from "./Modal.module.css";

function Modal(props) {
  
  return (
    <>
      {props.isCartOpen && (
        ReactDOM.createPortal(<div className={classes.backdrop} >
          <div className={classes.modal}>{props.children}</div>
        </div>,document.getElementById('modal'))
      )}
    </>
  );
}

export default Modal;
