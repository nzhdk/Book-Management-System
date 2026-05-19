import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {

    setCartItems((prevItems) => [...prevItems, book]);

    alert(`${book.title} Added To Cart`);

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;