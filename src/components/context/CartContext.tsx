'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartContextType, PostType } from "@/app/Types";

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<PostType[]>([]);
 
 useEffect(() => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    setCartItems(JSON.parse(storedCart));
  }
}, []);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems]);


  const addToCart = (product: PostType) => {
      const existingProduct = cartItems.find((item) => item.slug === product.slug);
      if (existingProduct) {
        setCartItems((prev) =>
          prev.map((item) => 
            item.slug === product.slug ? {...item, quantity: item.quantity + 1} : item
        ))
      } else {
        setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
      }
  };

  const removeFromCart = (slug: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  };
 

  const updateQuantity = (slug: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotalPrice, }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
