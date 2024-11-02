import { aboutPosts } from "../../data/about";
import Image from "next/image";

export default function About () {
    return (
        <div className="sm:w-[1248px] sm:h-[512px] flex flex-col items-center gap-16" id="about">
            <div>
                <h1
                className="text-2xl text-center"
                >About us</h1>
                <p
                className="text-gray-400 text-center"
                >Order now and appreciate the beauty of nature</p>
            </div>
            <div className="h-[800px] sm:w-[1152px] sm:h-[347px] ">
                <ul className="flex flex-col sm:flex-row justify-between items-center gap-12">
                    {aboutPosts.map((post)=> (
                    <li key={post.slug}
                    className="flex flex-col items-center w-[300px] gap-4"
                    >
                    <div className="w-24 h-24 bg-[#C1DCDC] rounded-full flex items-center justify-center">
                        <Image 
                        src={post.image}
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
                    >{post.content}</p>
                </li>
                 ))} 
               </ul>
                
            </div>
        </div>
    )
}