import { Header } from "./Layout/Header";
import CartProvider from "./store/CartProvider";
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
    <CartProvider>
      <Header handleCartOpenClick={handleCartOpenClick}/>

      <Meals />
      <Cart
        cartOpen={cartOpen}
        handleCartOpenClick={handleCartOpenClick}
        handleCartCloseClick={handleCartCloseClick}
      />
    </CartProvider>
  );
}

export default App;





// {
//   id: "m1",
//   name: "Sushi",
//   description: "Finest fish and veggies",
//   price: 22.99,
// },
// {
//   id: "m2",
//   name: "Schnitzel",
//   description: "A german specialty!",
//   price: 16.5,
// },
// {
//   id: "m3",
//   name: "Barbecue Burger",
//   description: "American, raw, meaty",
//   price: 12.99,
// },
// {
//   id: "m4",
//   name: "Green Bowl",
//   description: "Healthy...and green...",
//   price: 18.99,
// },
