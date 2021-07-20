import { Header } from "./Layout/Header";
import contextProvider from "./store/CartContextProvider";
import { Cart } from "./Cart/Cart";

import { Meals } from "./Meals/Meals";
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
    <contextProvider>
      <Header handleCartOpenClick={handleCartOpenClick}/>

      <Meals />
      <Cart
        cartOpen={cartOpen}
        handleCartOpenClick={handleCartOpenClick}
        handleCartCloseClick={handleCartCloseClick}
      />
    </contextProvider>
  );
}

export default App;
