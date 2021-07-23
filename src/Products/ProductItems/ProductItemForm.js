import React from "react";
import { useRef } from "react";
import classes from "./ProductItemForm.module.css";
import Input from "../../UI/Input";

export const ProductItemForm = (props) => {
  const [formValidity, setFormValidity] = React.useState(true);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setFormValidity(false);
      return;
    }
    console.log(`${props} here`);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: 1,
        }}
      />

      <button>+ Add</button>
      {!formValidity && <p>Please enter a valid amount(1-5).</p>}
    </form>
  );
};
