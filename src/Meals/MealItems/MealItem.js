import React from 'react';
import { useContext } from 'react';
import cartCtx from '../../store/CartContext';
import classes from "./MealItem.module.css";
import { MealItemForm } from './MealItemForm';

export const MealItem = (props) => {
    const context = useContext(cartCtx)

    const price = `$${props.meals.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        console.log(props.meals)
        console.log(amount)
        
        context.addItem({
            id: props.meals.id,
            name: props.meals.title,
            amount: amount,
            price : props.meals.price
        })
        console.log(context)
    }
   
    return (
        <li className={classes.meal}>
            
            <div>
                <img className={classes.image} src={props.meals.image}/>
                <h3>{props.meals.title}</h3>
                <div className={classes.description}>{props.meals.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </li>
    )
}
