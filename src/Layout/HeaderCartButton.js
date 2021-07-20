import React from 'react'
import classes from "./Button.module.css"
import CartIcon from "../Cart/cartIcon.js"

export default function HeaderCartButton(props) {
    return (
        <button className={classes.button} onClick={props.onhandleCartOpenClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>cart</span>
            <span className={classes.badge}>0</span>
            
        </button>
    )
}
