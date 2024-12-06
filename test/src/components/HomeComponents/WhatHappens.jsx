import { Button } from "../ui/button"

const WhatHappens = () => {
  return (
    <section className="font-montserrat bg-transparent sm:bg-orange-300 md:bg-sky-300 lg:bg-pink-300 relative h-screen overflow-hidden">
    {/* Background image */}
    <div
      className="absolute -top-32 sm:-top-14 md:-top-8 lg:-top-72 xl:-top-20 md:-right-10 
      lg:right-20  bg-no-repeat sm:w-[90%] md:w-[100%] lg:w-[100%] xl:w-[95%] h-[600px] md:h-[900px] lg:h-[1200px] xl:h-[900px] 
      bg-contain bg-center lg:-rotate-6 xl:rotate-6 "
      style={{
        backgroundImage: "url('/spiral2.png')",
        transformOrigin: "center",
      }}
    ></div>
    {/*content of hero here*/}
    <div className="relative z-10 flex items-center justify-center pt-3 sm:pt-5 md:px-5 
    lg:px-6 xl:px-9 md:pt-9">
      {/* container hero */}
      <div className="flex flex-col-reverse md:flex-row gap-3 w-full sm:bg-transparent  h-screen">
        {/* left side */}
        <div className="w-full md:w-1/2 px-10 md:p-0 flex items-center justify-center">
          <div className="flex flex-col items-center md:items-start gap-1 md:gap-5 lg:gap-8">
            <h2 className="font-semibold text-lg text-[#9524FF]">Founders Friday</h2>
            <h1 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold">
            What Happens At Founders Friday
            </h1>
            <p className="md:text-lg md:p-0 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, 
            facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo 
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant 
            morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <Button className='w-[220px] mt-3 md:mt-0 md:w-[200px] lg:w-[200px] flex rounded-md 
            gap-1 lg:gap-2 p-0 md:px-4 py-3 md:py-5 lg:px-4 lg:py-6 bg-myPurple'>
              <p className="text-white md:text-[15px] lg:text-lg">
              Learn More
              </p>
              <div className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6">
              <img className="h-full w-full object-cover" src="/new.png" alt="arrow" />
              </div>
            </Button>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/2 h-[500px] md:h-full relative">
        {/* header pictures-1 */}
          <div className="rounded-lg w-80 h-56 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-64 lg:h-64 xl:h-80 xl:w-80 absolute 
          left-4 sm:left-6 md:left-[30px] lg:left-32 xl:left-44 top-24 sm:top-10 md:top-64 z-10">
            <img className="rounded-lg object-contain h-full w-full" src="/f2.png" alt="header-pics" />
          </div>
          {/* header pictures-2 */}
          <div className="w-80 h-56 sm:w-80 sm:h-80  md:w-64 md:h-64 lg:w-64 lg:h-64 xl:h-80 
          xl:w-80 absolute right-8 sm:right-32 md:right-1  md:top-32 lg:top-28 xl:top-24">
            <img className="rounded-lg object-contain h-full w-full" src="/f1.png" alt="header-pics" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhatHappens
