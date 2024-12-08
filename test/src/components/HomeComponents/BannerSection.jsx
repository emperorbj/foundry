import { Button } from "../ui/button"
import { useState,useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
const BannerSection = () => {

    const cities = ["Kaduna", "Abuja", "Lagos"];
    const [index, setIndex] = useState(0);
  
    // Cycle through the messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cities.length]);

  const transitions = useTransition(cities[index], {
    from: { transform: "translateX(100%)", opacity: 0 },
    enter: { transform: "translateX(0%)", opacity: 1 },
    leave: { transform: "translateX(-100%)", opacity: 0 },
    config: { tension: 170, friction: 26 },
  });

    return (
        <section
            style={{
                backgroundImage: "url('/b1.png')",
                backgroundSize: 'cover', // Maintains original size
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            className="w-full p-4 h-screen" // Adjust height based on your needs
        >
            <div className="z-10 flex items-center justify-center pt-3 sm:pt-5 md:px-5 
                lg:px-6 xl:px-12  md:pt-24">
                {/* container hero */}
                <div className="flex flex-col-reverse md:flex-row gap-5 mb-3 sm:gap-20 md:gap-0 
                md:justify-between w-full">
                    {/* left side */}
                    <div className="w-full md:w-1/2 px-10 md:p-0 flex items-center justify-center">
                        <div className="flex flex-col items-center md:items-start gap-1 md:gap-5 lg:gap-8">
                            <h2 className="font-semibold text-xl md:text-3xl text-white">Founders Friday is coming to</h2>
                            <div className="overflow-hidden h-16">
                            {transitions((style, item) => (
                                <animated.h1
                                style={style}
                                className="text-3xl md:text-6xl font-bold text-myPurple"
                                >
                                {item}
                                </animated.h1>
                            ))}
                            </div>
                            <p className="md:text-lg text-white md:p-0 lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. 
                            Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis 
                            imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis 
                            consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et 
                            malesuada fames ac turpis egestas.
                            </p>
                            <Button className='border-2 border-myPurple rounded-full mt-5 flex gap-1 
                            md:px-8 md:py-5 lg:px-14 lg:py-6'>
                            <h2 className=" text-myPurple text-xl font-semibold">
                                Register
                            </h2>
                            <img src="/arrow.png" alt="" />
                            </Button>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="flex items-center justify-end md:justify-center">
                        {/* header pictures-1 */}
                        <div className="w-52 h-52 md:w-72 md:h-72">
                            <img className="rounded-lg object-contain h-full w-full" src="/blogo.png" alt="header-pics" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection
