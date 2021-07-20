import React, {createContext} from "react";


const cartCtx = createContext({
    items : [12,687,6],
    totalAMount : 0,
    addItem: (item) => {} ,
    removeItem : (id) => {}
})


export default cartCtx;