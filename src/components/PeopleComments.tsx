'use client'

import Image from "next/image";
import { commentsPosts as posts } from "../../data/comment";
import { useState, useEffect } from "react";

export default function PeopleComments () {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
      }, 5000);
  
      return () => clearInterval(interval); // Clean up the interval on unmount
    });
  
    return (
      <div className="carousel-container overflow-hidden w-full sm:w-[1248px] sm:h-[500px]">
        <div className="w-96 text-2xl font-bold px-4 mt-12">
          <h1>What customers say about GREEMIND?</h1>
        </div>
        <div
          className=" flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post, index) => (
            <div key={index} className=" flex-shrink-0 flex justify-center items-center p-4 ">
              <div className="post flex flex-col sm:gap-12 w-[450px] sm:w-[1216px] sm:h-[330px] pt-4 sm:py-4 px-4 sm:px-12 border rounded-lg  bg-[#C1DCDC]">
                <div>
                    <p className="">{post.title}</p>
                </div>
                <div className="flex justify-between">
                    <div className=" flex items-center sm:gap-12">
                    <Image src={post.imageUrl} alt={post.title} width={128} height={192} className="w-32 h-48" />
                        <div>
                            <h1 className="text-2xl font-bold">{post.name}</h1>
                            <p className="text-gray-500">{post.workAs}</p>
                        </div>
                    </div>
                    <div className="flex items-center text-xl font-bold">
                        <p 
                            className=" mt-2 pr-8"
                            >★  {post.rating}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };