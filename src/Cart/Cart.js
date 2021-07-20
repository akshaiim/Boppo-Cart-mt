import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export const Cart = (props) => {
  

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "fillet", amount: "2", price: "23.99" }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  

  return (
    <Modal onhandleCartCloseClick={props.handleCartCloseClick} isCartOpen={props.cartOpen}>
      {cartItems}
      <div className={classes.amount}>
        <span>Total Amount</span>
        <span>$ 23.99</span>
      </div>
      <div>
        <button onClick={props.handleCartCloseClick} className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
