import { Button } from "../ui/button"


const Community = () => {
    return (
        <section className="font-montserrat flex flex-col ">
            <div className="flex flex-col items-center justify-center py-6">
                <h1 className="font-bold text-xl">Register And Be Part of Our Community</h1>
                <h2 className="text-center">Join our community of over 1000+ founders, developers, and tech junkies in general.
                <br/>Be inspired by people who live to inspire!</h2>
            </div>
            <div className="w-full font-montserrat relative h-96 overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute -z-10  bg-no-repeat w-[100%] h-full 
                    bg-contain bg-center lg:-rotate-6 xl:rotate-6 "
                    style={{
                        backgroundImage: "url('/spiral3.png')",
                        transformOrigin: "center",
                    }}
                ></div>
                {/* first */}
                <div className="flex items-center z-10">
                    <div className="hidden sm:hidden md:block w-20 h-20 rounded-full ml-80 p-2 border border-[#2F6C62]">
                        <img className="object-cover h-full w-full" src="/avatar.png" alt="pix" />
                    </div>
                </div>
                {/* second */}
                <div className=" mt-14 flex gap-6 items-center justify-center z-10">
                    <div className="w-20 h-20 rounded-full p-2 border border-myOrange">
                        <img className="object-cover h-full w-full" src="/avatar.png" alt="pix" />
                    </div>
                    <div className=" w-20 h-20 rounded-full p-2 border border-blue-500">
                        <img className="object-cover h-full w-full" src="/avatar.png" alt="pix" />
                    </div>
                    <div className="w-20 h-20 rounded-full p-2 border border-myOrange">
                        <img className="object-cover h-full w-full" src="/avatar.png" alt="pix" />
                    </div>
                </div>
                {/* third */}
                <div className="flex items-center justify-between px-10 pr-36 z-30">
                    <div className="w-20 h-20 rounded-full p-2 border border-myPurple">
                        <img className="object-cover h-full w-full" src="/avatar.png" alt="pix" />
                    </div>
                    <div className="w-20 h-20 rounded-full p-2 border border-orange-400">
                        <img className="object-cover h-full w-full" src="/avatar.png" alt="pix" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pb-3">
            <Button className='border-2 w-40 md:w-48 lg:w-64 border-myPurple rounded-full mt-5 flex gap-3 
                md:px-8 md:py-5 lg:px-14 lg:py-6'>
                <h2 className=" text-myPurple md:text-[16px] lg:text-xl font-semibold">
                    Register Now
                </h2>
                <img src="/arrow.png" alt="" />
            </Button>
            </div>
        </section>

    )
}

export default Community
