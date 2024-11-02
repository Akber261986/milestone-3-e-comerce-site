import Image from "next/image"

export default function Catagory (){
    return (
        <div className="sm:w-[1248px] sm:h-[841px] flex flex-col items-center gap-16" id="product">
        <div className="flex flex-col items-center gap-4 mb-12">
           <h1
           className="text-2xl font-bold"
           >Categories</h1>
           <p
           className="text-gray-400 text-center text-[14px]"
           >Find what you are looking for</p>
        </div>
        <div
        className="flex flex-col  sm:flex-row justify-evenly w-[450px] h-[1550px] sm:w-[1248px] sm:h-[576px] bg-[#C1DCDC] rounded-lg"
        >
        <div className="group">
        <div className="flex flex-col items-center sm:gap-2 sm:mt-[-50px] transition-transform group-hover:translate-y-20 duration-300">
                <Image 
                src={"/png/categoryImg1.png"}
                alt="Natural plant"
                width={256}
                height={0}
                className="w-64 h-64 sm:h-auto"
                />
                <h1
                className=" font-bold"
                >Natural plants</h1>
                <div className="flex flex-col items-center gap-3 w-64">
                    <p
                    className="text-center text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href='#' className='flex justify-center items-center gap-3 w-40 h-10 bg-white rounded-lg border hover:border-black hover:bg-[#C1DCDC] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
        <div className="group">
        <div className="flex flex-col items-center gap-2 sm:mt-[-50px] transition-transform group-hover:translate-y-20 duration-300">
                <Image 
                src={"/png/categoryImg2.png"}
                alt="Natural plant"
                width={256}
                height={0}
                className="w-64 h-64 sm:h-auto"
                />
                <h1
                className=" font-bold"
                >Plants Accessories</h1>
                <div className="flex flex-col items-center gap-3 w-64">
                    <p
                    className="text-center text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href='#' className='flex justify-center items-center gap-3 w-40 h-10 bg-white rounded-lg border hover:border-black hover:bg-[#C1DCDC] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
        <div className="group">
        <div className="flex flex-col items-center gap-2 sm:mt-[-50px] transition-transform group-hover:translate-y-20 duration-300">
                <Image 
                src={"/png/categoryImg3.png"}
                alt="Natural plant"
                width={256}
                height={0}
                className="w-64 h-64 sm:h-auto"
                />
                <h1
                className=" font-bold"
                >Artificial plants</h1>
                <div className="flex flex-col items-center gap-3 w-64">
                    <p
                    className="text-center text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href='#' className='flex justify-center items-center gap-3 w-40 h-10 bg-white rounded-lg border hover:border-black hover:bg-[#C1DCDC] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
        </div>
    </div>
    )
}