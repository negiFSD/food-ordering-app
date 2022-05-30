import React from 'react'

// Creating a store folder is convention in react to store application wide state managment


    const CartContext =React.createContext({
        items:[],
        totalAmount:0,               /*these are default values and not so compulsory to mention */
        addItem: (item)=>{},        /*It is used when we impliment useconstext without adding context provider in parent component*/
        removeItem: (id)=>{}
    })

    export default CartContext