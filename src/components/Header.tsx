'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header (){

const [show, setShow] = useState<boolean>(false);


const handleShowMenu = () => {
        setShow(!show)
}

 return (
    <div className="flex sm:justify-center sm:py-10">
        <div className={`flex ${show ? "" : "-ml-[450px]" }  sm:flex  absolute w-3/4 h-full bg-white sm:bg-transparent sm:static flex-col-reverse sm:flex-row sm:h-12 sm:w-[1248px]  justify-end gap-28 sm:gap-0 sm:justify-between sm:items-center py-4 sm:p-0 translate-x-0 duration-500`}>
            <div className="flex sm:flex-1 flex-col sm:flex-row justify-between items-center gap-36 sm:gap-0">
                <div
                className="text-2xl font-[Poppins] "
                >
                    GREENMIND
                </div>
                <ul className="flex flex-col sm:flex-row gap-20 text-[#B6B5B5] ">
                    <li className="hover:text-[#1E1E1E]"><Link href={"#"}>Home</Link></li>
                    <li className="hover:text-[#1E1E1E]"><Link href={"#product"}>Product</Link></li>
                    <li className="hover:text-[#1E1E1E]"><Link href={"#contact"}>Contact</Link></li>
                </ul>
            </div>
            <div className="sm:flex-1 ">
                <div className="flex  flex-row-reverse justify-between px-8 sm:px-0 sm:justify-end sm:flex-row gap-10">
                    <Image 
                    src={"/svg/cart.svg"}
                    alt="cart"
                    width={24}
                    height={24}
                    />
                    <Image 
                    src={"/svg/person.svg"}
                    alt="cart"
                    width={24}
                    height={24}
                    />
                    <Image 
                    src={"/svg/hamburgur.svg"}
                    alt="cart"
                    width={24}
                    height={24}
                    />
                </div>
            </div>
        </div>
                <Image 
                src={"/svg/hamburgur.svg"}
                alt="cart"
                width={24}
                height={24}
                className={`absolute top-4 left-8 block sm:hidden ${show ? "opacity-0" : "opacity-100"} `}
                onClick={handleShowMenu}
                />
    </div>
 )
} 