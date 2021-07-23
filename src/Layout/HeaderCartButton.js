import React from "react";
import classes from "./Button.module.css";
import CartIcon from "../Cart/cartIcon.js";
import CartContext from "../store/CartContext";

export default function HeaderCartButton(props) {
  const context = React.useContext(CartContext);
  console.log(`here ${context.items}`);
  const numberOfCartItems = 
  
  context.items.reduce((curNumber, item) => 
    curNumber + item.amount
  , 0);
  return (
    <button className={classes.button} onClick={props.onhandleCartOpenClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      <span className={classes.badge}>${context.totalAmount.toFixed(2)}</span>
    </button>
  );
}
