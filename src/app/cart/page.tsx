"use client";

import React from "react";
import { useCart } from "@/components/context/CartContext";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity} = useCart();
  console.log(cartItems.length);
  
  return (
    <div className="pt-20  px-4
      sm:px-8
      md:px-12
      lg:px-32">
      <div className="py-6"><a href="/" className="mb-4 ml-6 text-[#7D8184]">Home /</a> <a href="cart">Cart</a></div>
      {cartItems.length === 0 ? (
        <p className="place-self-center">Your cart is empty.</p>
      ) : (
        <div className="p-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center py-8 gap-4">
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Sub Total</h1>
          </div>
          {cartItems.map((item) => (
            <div key={item.slug} className="grid grid-cols-2 lg:grid-cols-4 mb-4  py-4 rounded-lg shadow-sm shadow-gray-200">
              <div className="relative group flex items-center gap-4">
                <button
                onClick={() => removeFromCart(item.slug)}
                className="items-center justify-center text-xs bg-red-500 rounded-full w-4 h-4 text-white absolute top-0 left-0 hidden group-hover:flex"
                >
                  X
                </button>
                <Image src={urlFor(item.image).url()} alt={item.title} width={100} height={80} />
                <h2 className="text-lg">{item.title}</h2>
              </div>
              <div className="flex items-center justify-center"><p>${item.price}</p></div>
              <div className="flex items-center justify-center gap-2 ">
                <Input
                  type="number"
                  id="quantity"
                  value={item.quantity.toString().padStart(2, "0")}
                  onChange={(e) => updateQuantity(item.slug, + e.target.value)}
                  className="p-2 w-16 rounded-lg border border-[#7D8184] "
                />
              </div>
              <div className="flex items-center justify-center">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
          
          <div className="flex justify-between">
            <Button variant={"outline"} className="py-6 px-10 border-[#7D8184]">Return To Shop</Button>
            <Button variant={"outline"} className="py-6 px-10 border-[#7D8184]">Update Cart</Button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-16">
            <div className="flex-1 flex gap-6 ">
              <Input
              placeholder="Coupon Code"
              className="p-6 border-[#7D8184]"
              />
              <Button
              variant="destructive"
              className="py-6 px-10 "
              >Apply Coupon</Button>
            </div>
            <div className="flex-1 lg:pl-32">
              <div className="flex flex-col gap-3 w-full border-2 border-gray-600 rounded-sm py-6 px-28 md:px-6">
                <h1 className="text-xl font-semibold mb-4">Cart Total</h1>
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p>$1750</p>
                </div>
                  <hr className="border-[#bcc0c4]"/>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p>Free</p>  
                </div>
                  <hr className="border-[#bcc0c4]"/>
                <div className="flex items-center justify-between">
                  <p>Total</p>
                  <p>$1750</p>  
                </div>
                  <Button
                  variant={"destructive"}
                  className="self-center px-10 py-6 mt-4"
                  >Process to checkout</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
