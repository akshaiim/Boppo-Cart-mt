import React from "react";
import classes from "./Modal.module.css";

function Modal(props) {
  
  return (
    <>
      {props.isCartOpen && (
        <div className={classes.backdrop} onClick={props.onhandleCartCloseClick}>
          <div className={classes.modal}>{props.children}</div>
        </div>
      )}
    </>
  );
}

export default Modal;
