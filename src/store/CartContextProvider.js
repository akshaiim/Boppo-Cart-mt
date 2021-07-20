import cartCtx from "./CartContext";

const contextProvider = (props) =>{

    const addItemToCart = (item) => {

    }

    const removeItemFromCart = (item) => {

    }


    const cartContext =  {
    items : [12,687,6],
    totalAMount : 0,
    addItem: addItemToCart ,
    removeItem : removeItemFromCart
}

    return (<cartCtx.provider value={cartContext}>
        {props.children}

    </cartCtx.provider>)

}

export default contextProvider;