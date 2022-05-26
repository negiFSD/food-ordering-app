import {useState} from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
const[cartShown, setCartShown]= useState(false)

const showControlHanlder=()=>{
  setCartShown(true)
}

const hideCardHandler =()=>{
  setCartShown(false)
}


return (
    <CartProvider>
      {cartShown && <Cart onClose= {hideCardHandler}/>}
      <Header onShowCart={showControlHanlder}/>
      <main><Meals/> </main>
      
    </CartProvider>
  );
}

export default App;
