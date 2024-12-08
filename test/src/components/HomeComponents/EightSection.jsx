
import { Button } from "../ui/button"
const EightSection = () => {
    return (
        <section className="font-montserrat mt-8 flex md:px-3 lg:px-6 pb-14">
            <div className="w-full flex flex-col md:flex-row md:gap-1 lg:gap-5">
                <div className="w-full p-8 md:p-0 md:w-1/2">
                    <img className="object-cover h-full w-full" src="/e1.png" alt="pix" />
                </div>
                <div className="w-full sm:p-4 bg-red-300 md:p-0 md:w-1/2 h-full 
                    flex flex-col items-center md:items-start justify-center">
                    <div className="flex flex-col gap-8 md:gap-8 lg:gap-12 pl-4">
                        <h1 className="font-bold text-xl text-center md:text-start">At Founders Friday, Every Friday Is a Learning Experience!</h1>
                        <p className="md:text-[18px] lg:text-[20px] text-center md:text-start">
                        Join us in our mission to transform ideas into impact and shape the future of Nigeria startup landscape.
                        </p>
                        <div className="flex gap-3 items-center justify-center md:justify-start">
                            <Button className='bg-myPurple rounded-full flex gap-1 px-4 py-5 md:px-8 
                            md:py-5 lg:px-10 lg:py-6'>
                                <h2 className="text-white font-semibold">
                                    Register
                                </h2>
                                <img className="w-6 h-6 md:w-7 md:h-7" src="/new.png" alt="" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EightSection
