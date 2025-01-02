import { PostType } from "@/app/Types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const getData = async (): Promise<PostType[]> => {
  const quary = `*[_type == "about"][0...3] | order(_createdAt asc){
  "slug": slug.current,
    title,
    description,
    image,
}`;
  const response = await client.fetch(quary);
  return response
};
export default async function About () {
    const products = await getData()
    return (
        <div className=" flex flex-col items-center gap-16" id="about">
            <div>
                <h1
                className="text-2xl text-center"
                >About us</h1>
                <p
                className="text-gray-400 text-center"
                >Order now and appreciate the beauty of nature</p>
            </div>
            <div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((post)=> (
                    <li key={post.slug}
                    className="flex flex-col items-center w-[300px] gap-4"
                    >
                    <div className="w-24 h-24 bg-[#C1DCDC] rounded-full flex items-center justify-center">
                        <Image 
                        src={urlFor(post.image).url()}
                        alt={post.title}
                        width={40}
                        height={40}
                        />
                    </div>
                    <h1
                    className="text-[18px] font-bold"
                    >{post.title}</h1>
                    <p
                    className="text-center text-gray-400"
                    >{post.description}</p>
                </li>
                 ))} 
               </ul>
                
            </div>
        </div>
    )
}