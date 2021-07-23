import { Header } from "./Layout/Header";
import CartProvider from "./store/CartProvider";
import { Cart } from "./Cart/Cart";

import { Products } from "./Products/Products";
import React from "react";
function App() {
  const [cartOpen, setCartOpen] = React.useState(false);

  const handleCartCloseClick = () => {
    setCartOpen(false);
  };

  const handleCartOpenClick = () => {
    console.log("hello")
    setCartOpen(true);
  };

  return (
    <CartProvider>
      <Header handleCartOpenClick={handleCartOpenClick}/>

      <Products />
      <Cart
        cartOpen={cartOpen}
        handleCartOpenClick={handleCartOpenClick}
        handleCartCloseClick={handleCartCloseClick}
      />
    </CartProvider>
  );
}

export default App;



