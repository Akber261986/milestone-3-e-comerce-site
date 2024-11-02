import { posts } from '../../data/posts';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import Image from "next/image";

export default function Hero (){
    return (
        <div className="flex flex-col items-center sm:w-[1440] sm:h-[1280]">
            <div className="w-[450px] sm:w-[1248px] sm:h-[512px] bg-[#C1DCDC] rounded-lg flex flex-col sm:flex-row items-center sm:place-items-stretch sm:pr-4 sm:pt-2 sm:justify-between">
                <div className="sm:w-[512px] h-96 sm:h-[128px] flex flex-col gap-12 sm:pl-10 pt-10 ">
                    <h1
                    className="text-4xl text-center sm:text-start sm:text-[64px] font-extrabold font-[Poppins] leading-[64px]"
                    >Buy Your dream plant</h1>
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
                <div className="flex items-center bg-gray-100 rounded-xl p-2 ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-grow bg-transparent outline-none text-gray-700 px-2"
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
                <div className="hidden sm:block self-end mb-24">
                    <Image 
                    src={"/svg/Vector1.svg"}
                    alt="vector"
                    width={112}
                    height={169}
                    />
                </div>
                <div className="flex">
                    <div className="self-end w-52 h-48 sm:w-[450px] sm:h-[400px] bg-black  rounded-t-full rounded-br-none rounded-bl-full">
                            <Image
                            src={"/png/heroPlant.png"}
                            alt="Plant"
                            width={411}
                            height={0}
                            className="mt-[-58px] ml-8 sm:mt-[-95px] sm:ml-16"
                            />
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <Image 
                    src={"/svg/Vector2.svg"}
                    alt="vector2"
                    width={112}
                    height={154}
                    />
                </div>
            </div>
            <div className=" sm:w-[1248px] sm:h-[512px] mt-8">  
                <ul className='grid grid-cols-1 sm:grid-cols-4 '>
                    <li className='sm:mb-4 w-40 h-52 sm:w-[270px] sm:h-[436px]'>
                        <Card
                        className='flex flex-col items-center justify-center text-center sm:block sm:text-start space-y-6 border-none font-[Poppins] w-64'
                        >
                            <CardTitle
                            className='text-3xl font-bold'
                            >Best Selling Plants</CardTitle>
                            <CardDescription
                            className='text-gray-400'
                            >
                            Easiest way to healthy life by buying your favorite plants
                            </CardDescription>
                           <a href='#' className='flex justify-center items-center gap-3 w-40 h-12 bg-[#C1DCDC] rounded-lg '>
                           <p>See more</p>
                           <Image 
                            src={"/svg/Vector3.svg"}
                            alt='Arrow'
                            width={24}
                            height={20}
                            />
                           </a>
                        </Card>
                    </li>
                    {/* Loop through the posts and create a link to each blog post */}
                    {posts.map((post) => (
                    <li key={post.slug} className=" mb-4 w-[270px] h-[436px]">
                        <Card
                        className="flex flex-col space-y-2 border-none"
                        >
                        <Image 
                        src={post.image}
                        alt='blog Image'
                        width={384}
                        height={200}
                        className='rounded-lg'
                        />
                        <div className='flex justify-between items-center'>
                            <div>
                                <CardTitle 
                                className='text-1xl mt-2'
                                >
                                    {post.title}
                                </CardTitle>
                                <CardDescription
                                className='text-gray-400'
                                >
                                    {post.content}
                                </CardDescription>
                            </div>
                            <div>
                                <button 
                                className='flex justify-center items-center gap-3 w-32 h-10 text-sm bg-[#C1DCDC] rounded-lg border hover:border-gray-400 '>
                                <p>Add to Cart</p>
                                <Image 
                                    src={"/svg/cart.svg"}
                                    alt='Arrow'
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
    )
}