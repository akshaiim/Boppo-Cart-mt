import React from 'react';
import meals from "../Assets/meals.jpg";
import Button from "./HeaderCartButton"
import classes from "./Header.module.css";
import CartContext from '../store/CartContext';


export const Header = (props) => {
    console.log(props)
   const context = React.useContext(CartContext)
   console.log(context)
    return (
        <>
        <header className={classes.header}>
            <h1>Meals</h1>
            <Button onhandleCartOpenClick={props.handleCartOpenClick}/>
        </header>
        {/* <div>
            <img className={classes.image} src={meals} alt="a table full of meals"/>
        </div> */}
            
        </>
    )
}
