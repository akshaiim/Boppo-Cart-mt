import React from 'react';
import { useContext } from 'react';
import cartCtx from '../../store/CartContext';
import classes from "./ProductItem.module.css";
import { ProductItemForm } from './ProductItemForm';

export const ProductItem = (props) => {
    const context = useContext(cartCtx)

    const price = `$${props.products.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        // console.log(props.meals)
        console.log(amount)
        
        context.addItem({
            id: props.products.id,
            name: props.products.title,
            amount: amount,
            price : props.products.price
        })
        console.log(context)
    }
   
    return (
        <li className={classes.product}>
            
            <div>
                <img className={classes.image} src={props.products.image}/>
                <h3>{props.products.title}</h3>
                <div className={classes.description}>{props.products.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <ProductItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </li>
    )
}
