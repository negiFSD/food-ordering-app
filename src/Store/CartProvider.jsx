import React, { useReducer } from "react";
import CartContext from "./Cart-context";

/* We have created this component and Cart-context component so that we dont
   need to write useContext addtional code in App.js, it help to keep App.js clean and understandable */

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

/*
const cartReducer = (state, action) => {
  console.log(action);
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
       
    const existingCardItemIndex = state.items.findIndex(  // here we are finding in the index
      (item) => item.id === action.item.id
    );

    const existingCardItem = state.items[existingCardItemIndex]  // storing the data of found index
     
      let updatedItems;

        if(existingCardItem){
         const updateditem={
            ...existingCardItem,
            amount: existingCardItem.amount + action.item.amount // if any button is pressed again than created new variable and storing the data with specific index in this variable with addition to updated amount
          };
          updatedItems=[...state.items];
          updatedItems[existingCardItemIndex] = updateditem     // here updating the cart array
        }
        else{
          updatedItems = state.items.concat(action.item)
        }
        
   

    console.log(existingCardItemIndex, " sdfsdf");
    console.log(existingCardItem, 'existing items')

    if(action.type === "REMOVE"){
        const existingCardItemIndex = state.items.findIndex(
          item => item.id ===action.id
        )
        const existingItem = state.items[existingCardItemIndex ]
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount===1){
          updatedItems=state.items.filter(item=> item.id !== action.id)
        }else{
          const updateditem ={...existingItem, amount: existingItem.amount-1}
          updatedItems =[...state.items]
          updatedItems[existingCardItemIndex]=updateditem;
        }
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
    }
  }
  
  return defaultCartState;
};

*/
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item }); // this is function is used with dispatch method in child components and will use to lift states from child to parent
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
