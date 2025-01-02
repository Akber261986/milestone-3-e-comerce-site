import Image from "next/image"
export default function Footer (){
    return (
        <div className="flex flex-col sm:px-12 bg-[#C1DCDC] mt-24" id="contact">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="flex flex-col gap-24">
                    <div className="w-48 h-14 p-8">
                        <h3 className="sm:text-xl mb-4 font-bold font-serif">GREENMIND</h3>
                        <p className="text-gray-500">We help you find your dream plant</p>
                    </div>
                    <div className="flex gap-3 h-12 px-6">
                        <div className="flex justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-gray-500 cursor-pointer">
                            <Image 
                            src={"/svg/fb.svg"}
                            alt="facebook"
                            width={12}
                            height={18}
                            />
                        </div>
                        <div className="flex justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-gray-500 cursor-pointer">
                        <Image 
                            src={"/svg/cam.svg"}
                            alt="camra"
                            width={18}
                            height={16}
                            />
                        </div>
                        <div className="flex justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-gray-500 cursor-pointer">
                        <Image 
                            src={"/svg/tx.svg"}
                            alt="twitter x"
                            width={20}
                            height={16}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-between md:justify-evenly p-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold sm:text-lg">Information</h3>
                        <p className="text-gray-500">About</p>
                        <p className="text-gray-500">Product</p>
                        <p className="text-gray-500">Blog</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold sm:text-lg">Company</h3>
                        <p className="text-gray-500">Community</p>
                        <p className="text-gray-500">Career</p>
                        <p className="text-gray-500">Our story</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold sm:text-lg">Contact</h3>
                        <p className="text-gray-500">Greeting Started</p>
                        <p className="text-gray-500">Pricing</p>
                        <p className="text-gray-500">Resources</p>
                    </div>
                </div>
            </div>
            <div className="px-8 text-gray-500 text-center p-4">2024 all Right Reserved Term of use GREENMIND</div>
        </div>
    )
}