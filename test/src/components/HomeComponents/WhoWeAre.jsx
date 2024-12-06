import { Button } from "../ui/button"


const WhoWeAre = () => {
    return (
        <section className="font-montserrat flex md:px-3 lg:px-6 pb-14">
            <div className="w-full flex flex-col md:flex-row md:gap-1 lg:gap-5">
                <div className="bg-red-300 w-full p-8 md:p-0 md:w-1/2">
                    <img className="object-cover h-full w-full" src="/w1.png" alt="pix" />
                </div>
                <div className="w-full sm:p-4 md:p-0 md:w-1/2 border-l-[5px] h-full 
                border-myPurple rounded-l-lg 
                flex flex-col items-center md:items-start justify-between">
                    <div className="flex flex-col gap-8 md:gap-8 lg:gap-12 pl-4">
                        <h1 className="font-bold text-3xl text-center md:text-start">Who Are We?</h1>
                        <p className="md:text-[18px] lg:text-[20px] text-center md:text-start">
                            Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent,
                            high-quality networking platform where founders, innovators, and tech enthusiasts could connect,
                            share ideas, and foster collaboration.
                        </p>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <Button className='bg-myPurple rounded-full flex gap-1 md:px-8 md:py-5 lg:px-10 lg:py-6'>
                                <h2 className="text-white font-semibold">
                                    Register
                                </h2>
                                <img src="/new.png" alt="" />
                            </Button>
                            <Button className='border-2 border-myPurple rounded-full flex gap-1 md:px-8 md:py-5 lg:px-10 lg:py-6'>
                                <h2 className="text-myPurple font-semibold">
                                    Donate
                                </h2>
                                <img src="/money.png" alt="" />
                            </Button>
                        </div>
                    </div>
                    <p className="font-semibold pl-3 md:pl-1 mt-8 md:mt-3">
                        Founder's Friday is more than just a meetup — it's a movement.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
