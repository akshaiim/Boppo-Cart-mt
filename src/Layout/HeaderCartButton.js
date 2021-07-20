import React from 'react'
import classes from "./Button.module.css"
import CartIcon from "../Cart/cartIcon.js"
import cartCtx from '../store/CartContext'

export default function HeaderCartButton(props) {

    const context = React.useContext(cartCtx)
    return (
        <button className={classes.button} onClick={props.onhandleCartOpenClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>cart</span>
            <span className={classes.badge}>{context.items.length}</span>
            
        </button>
    )
}
