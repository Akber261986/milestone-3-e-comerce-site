import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PostType } from "@/app/Types";
import Image from "next/image"

const getData = async (): Promise<PostType[]> => {
  const quary = `*[_type == "category"][0...4] | order(_createdAt asc){
  "slug": slug.current,
    title,
    description,
    image,
}`;
  const response = await client.fetch(quary);
  return response
};

export default async function Catagory (){
    const product = await getData()
    return (
        <div className="flex flex-col items-center gap-16" id="product">
        <div className="flex flex-col items-center gap-4 mb-12">
           <h1
           className="text-2xl font-bold"
           >Categories</h1>
           <p
           className="text-gray-400 text-center text-[14px]"
           >Find what you are looking for</p>
        </div>
        <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#C1DCDC] rounded-lg gap-6 md:gap-20 pb-6 md:pb-28 px-4"
        >
        {product.map((product)=> (
            <div key= {product.slug} className="group">
                <div  className="flex flex-col items-center sm:gap-2 md:mt-[-50px] transition-transform md:group-hover:translate-y-20 duration-300">
                    <Image 
                    src={urlFor(product.image).url()}
                    alt="Natural plant"
                    width={256}
                    height={350}
                    />
                    <h1
                    className=" font-bold"
                    >{product.title}</h1>
                    <div className="flex flex-col items-center gap-3">
                        <p
                        className="text-center text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >{product.description}</p>
                        <a href='#' className='flex justify-center items-center gap-3 px-6 py-2 bg-white rounded-lg border hover:border-black hover:bg-[#C1DCDC] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <p>See more</p>
                            <Image 
                            src={"/svg/Vector3.svg"}
                            alt='Arrow'
                            width={24}
                            height={20}
                            />
                        </a>
                    </div>
                </div>
            </div>            
                ))}
        </div>
    </div>
    )
}