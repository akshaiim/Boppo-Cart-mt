import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export const Cart = (props) => {
  const context = useContext(CartContext);
  const amountt = context.totalAmount.toFixed(2)
  // console.log((amountt))

  // const totalAmount = `$${context.totalAMount.toFixed(2)}`;

  const hasItems = context.items.length > 0;

  const cartItemAddHandler = (item) => {
    context.addItem({...item})
  };

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id)
  };

  const emptyCartHandler = ()=>{
    context.empty()
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal
      onhandleCartCloseClick={props.handleCartCloseClick}
      isCartOpen={props.cartOpen}
    >
      <h2>Checkout Modal</h2>
      {cartItems}
      {!hasItems && <h4>Your Cart is Empty</h4>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${amountt}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={props.handleCartCloseClick}
          className={classes["button--alt"]}
        >
          Close
        </button>
        {hasItems && <button onClick={emptyCartHandler} className={classes.button}>Empty</button>}
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
