import { Button } from "../ui/button"


const HeroSection = () => {
  return (

    <section className="relative h-screen overflow-hidden">
    {/* Background image */}
    <div
      className="absolute -top-14 md:-top-8 lg:-top-72 xl:-top-14 md:-right-10 
      lg:right-20  bg-no-repeat w-[65%] h-[500px] md:h-[400px] lg:h-[1200px] xl:h-[900px] 
      bg-contain bg-center lg:-rotate-6 xl:rotate-6 "
      style={{
        backgroundImage: "url('/spiral1.png')",
        transformOrigin: "center",
      }}
    ></div>
    {/*content of hero here*/}
    <div className="relative z-10 flex items-center justify-center pt-5 md:px-5 lg:px-6 xl:px-9 md:pt-9">
      {/* container hero */}
      <div className="flex flex-col-reverse md:flex-row gap-3 w-full bg-purple-500 sm:bg-transparent 
      md:bg-pink-200 lg:bg-green-300 
      xl:bg-yellow-300 h-screen">
        {/* left side */}
        <div className="w-full md:w-1/2 px-10 md:p-0 flex items-center justify-center">
          <div className="flex flex-col items-center md:items-start gap-1 md:gap-5 lg:gap-8">
            <h2 className="font-semibold text-lg ">Join our premier monthly meetup for startup founders and tech visionaries</h2>
            <h1 className="md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#9524FF]">Connect, Collaborate, Innovate!</h1>
            <p className="md:text-lg md:p-0 lg:text-xl">Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. 
              Whether you are a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad 
              for new ideas, valuable connections, and game-changing opportunities.
            </p>
            <Button className='w-[220px] mt-3 md:mt-0 md:w-[280px] lg:w-[300px] flex rounded-xl 
            gap-1 lg:gap-2 p-0 md:px- py-3 md:py-5 lg:px-4
            border border-myPurple'>
              <p className="text-myPurple md:text-[15px] lg:text-lg">
              Register For Our Next Event
              </p>
              <div className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8">
              <img className="h-full w-full object-cover" src="/arrow2.png" alt="arrow" />
              </div>
            </Button>
            <p >
            Join Us for our next meetup on the 26th of July 2024
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-18 md:h-18">
                <img className="w-full h-full object-cover" src="/s1.png" alt="sponsors" />
              </div>
              <div className="w-12 h-12 md:w-18 md:h-18">
                <img className="w-full h-full object-cover" src="/s2.png" alt="sponsors" />
              </div>
              <div className="w-12 h-12 md:w-18 md:h-18">
                <img className="w-full h-full object-cover" src="/s3.png" alt="sponsors" />
              </div>
              <div className="w-12 h-12 md:w-18 md:h-18">
                <img className="w-full h-full object-cover" src="/s4.png" alt="sponsors" />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <p>
              Become a collaborator today
              </p>
              <img src="boxarrow.png" alt="link-box" />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/2 h-[500px] md:h-full relative">
        {/* header pictures-1 */}
          <div className="w-48 h-48 md:w-40 md:h-40 lg:w-64 lg:h-64 xl:h-80 xl:w-80 absolute 
          left-4 sm:right-[360px] lg:right-[200px] xl:right-[278px]">
            <img className="object-cover h-full w-full" src="/h1.png" alt="header-pics" />
          </div>
          {/* header pictures-2 */}
          <div className="w-48 h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:h-80 
          xl:w-80 absolute right-8 sm:right-40 md:right-8  md:top-18 lg:top-28">
            <img className="object-cover h-full w-full" src="/h2.png" alt="header-pics" />
          </div>
          {/* header pictures-3 */}
          <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-52 xl:h-52 
          absolute right-[100px] md:right-[200px] lg:right-[290px] xl:right-[390px] top-[110px] md:top-[200px] lg:top-[340px]">
            <img className="object-cover h-full w-full" src="/h3.png" alt="header-pics" />
          </div>
          {/* header pictures-4 */}
          <div className="md:w-24 md:h-24 xl:w-28 xl:h-28 absolute left-20 sm:left-36 md:right-[140px] 
          lg:left-[190px] xl:left-[340px] top-36 sm:top-[180px] md:top-[270px] lg:top-[400px]">
            <img className="object-cover h-full w-full" src="/h4.png" alt="header-pics" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection
