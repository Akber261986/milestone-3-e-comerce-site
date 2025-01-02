"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./context/CartContext";

export default function Header() {
  const { cartItems } = useCart()
  const [show, setShow] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <div className="w-screen flex justify-center">
      <div
        className={`${show ? "left-0" : "-left-64"} flex flex-col-reverse items-center absolute p-4 justify-between z-10 md:z-0
        sm:static sm:flex-row sm:w-full  bg-[#eee]`}
      >
        <div
          className="flex flex-col items-center py-4 md:py-0 px-8 gap-16
            sm:flex-row 
            "
        >
          <div className="text-2xl font-[Poppins]">GREENMIND</div>
          <ul className="flex flex-col gap-12 sm:flex-row text-[#B6B5B5] ">
            <li className="hover:text-[#1E1E1E]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#1E1E1E]">
              <Link href={""}>Product</Link>
            </li>
            <li className="hover:text-[#1E1E1E]">
              <Link href={""}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row-reverse px-8 sm:flex-row gap-10 z-30">
          <Link href={"cart"}  className="relative">
          {cartItems.length > 0 && <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-red-500 text-white text-center">{cartItems.length}</div>}
          <p>
            <Image src={"/svg/cart.svg"} alt="cart" width={24} height={24} />
          </p>
          </Link>
          <Image src={"/svg/person.svg"} alt="cart" width={24} height={24} />
          <Image src={"/svg/hamburgur.svg"} alt="cart" width={24} height={24} />
        </div>
      </div>
      <Image
        src={"/svg/hamburgur.svg"}
        alt="cart"
        width={24}
        height={24}
        className={`absolute top-4 left-12 block sm:hidden ${show ? "opacity-0" : "opacity-100"} z-20 `}
        onClick={handleShowMenu}
        />
    </div>
  );
}
