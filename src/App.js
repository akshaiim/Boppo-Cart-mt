import { Header } from "./Layout/Header";
import CartProvider from "./store/CartProvider";
import { Cart } from "./Cart/Cart";

// import Products  from "./Products/Products";
import React from "react";


const Products = React.lazy(()=>{
  const product = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(import("./Products/Products"))
    }, 3000)
  })
  return product;
})


function App() {
  const [cartOpen, setCartOpen] = React.useState(false);

  const handleCartCloseClick = () => {
    setCartOpen(false);
  };

  const handleCartOpenClick = () => {
    setCartOpen(true);
  };

  return (
    <CartProvider>
      <Header handleCartOpenClick={handleCartOpenClick}/>

      <React.Suspense fallback={<h1><br/>plz wait products are loading!</h1>}>
      <Products />

      </React.Suspense>

      
      <Cart
        cartOpen={cartOpen}
        handleCartOpenClick={handleCartOpenClick}
        handleCartCloseClick={handleCartCloseClick}
      />
    </CartProvider>
  );
}

export default App;



