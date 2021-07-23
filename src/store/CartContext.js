import React, {createContext} from "react";


const CartContext = React.createContext({
    items : [],
    totalAMount : 0,
    addItem: (item) => {} ,
    removeItem : (id) => {}
})


export default CartContext;