"use client";

import { useState, useEffect } from "react";
import { PostType } from "@/app/Types";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "./context/CartContext";

const getData = async (): Promise<PostType[]> => {
  const quary = `*[_type == "products"][0...3] | order(_createdAt asc){
  "slug": slug.current,
    title,
    price,
    image,
}`;
  const response = await client.fetch(quary);
  return response;
};

export default function Hero() {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setProduct(fetchedData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-screen bg-[#C1DCDC] rounded-lg flex flex-col sm:flex-row items-center sm:place-items-stretch sm:pr-4 sm:pt-2 sm:justify-between">
        <div className="flex flex-col gap-12 sm:pl-10 pt-10 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center sm:text-start font-extrabold font-[Poppins] leading-[64px]">
            Buy Your dream plant
          </h1>
          <div className="flex items-center justify-around sm:justify-start sm:space-x-12">
            <div>
              <p className="text-2xl font-medium font-Poppins">50+</p>
              <p>Plant Species</p>
            </div>
            <div className="w-[1px] h-16 bg-black"></div>
            <div>
              <p className="text-2xl font-medium font-Poppins">100+</p>
              <p>Customers</p>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-xl p-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow bg-transparent outline-none text-gray-700 px-2 w-full"
            />
            <button className="bg-[#C1DCDC] p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.42-1.42l4.34 4.33a1 1 0 11-1.42 1.42l-4.34-4.33zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:block self-end mb-24">
          <Image
            src={"/svg/Vector1.svg"}
            alt="vector"
            width={112}
            height={169}
          />
        </div>
        <div className="flex mt-8">
          <div className="relative self-end w-80 h-80 md:w-[450px] md:h-[400px] bg-black  rounded-t-full rounded-br-none rounded-bl-full">
            <Image
              src={"/png/heroPlant.png"}
              alt="Plant"
              width={411}
              height={344}
              className="absolute bottom-0 -right-10"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={"/svg/Vector2.svg"}
            alt="vector2"
            width={112}
            height={154}
          />
        </div>
      </div>
      <div className="mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {product.map((post) => (
            <li key={post.slug} className="mb-4 w-[270px] h-[436px]">
              <Card className="flex flex-col space-y-2 border-none">
                <Image
                  src={urlFor(post.image).url()}
                  alt="Plant Image"
                  width={384}
                  height={200}
                  className="rounded-lg"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-1xl mt-2 ">
                      <Link href={`/product/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {post.description}
                    </CardDescription>
                  </div>
                  <div>
                    <button
                      className="flex justify-center items-center gap-3 w-32 h-10 text-sm bg-[#C1DCDC] rounded-lg border hover:border-gray-400"
                      onClick={() => addToCart(post)}
                    >
                      <p>Add to Cart</p>
                      <Image
                        src="/svg/cart.svg"
                        alt="Cart Icon"
                        width={15}
                        height={15}
                      />
                    </button>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
