

const FaqTwo = () => {
  return (
    <section className="py-20">
      <div className="pl-4 lg:pl-10 pt-11">
        <h1 className="text-xl font-bold">FAQ</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-2">
          {/* left faq */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 lg:gap-3 items-center">
              <h2 className="text-myPurple text-[14px] sm:text-[16px] lg:text-xl">Lorem ipsum dolor sit amet, consectetur adi elit.</h2>
              <div className="w-5 h-5">
                <img className="w-full object-cover h-full" src="/arrow-down.png" alt="dropdown" />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-3 items-center">
              <h2 className="text-myPurple text-[14px] sm:text-[16px] lg:text-xl">Lorem ipsum dolor sit amet, consectetur adi elit.</h2>
              <div className="w-5 h-5">
                <img className="w-full object-cover h-full" src="/arrow-down.png" alt="dropdown" />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-3 items-center">
              <h2 className="text-myPurple text-[14px] sm:text-[16px] lg:text-xl">Lorem ipsum dolor sit amet, consectetur adi elit.</h2>
              <div className="w-5 h-5">
                <img className="w-full object-cover h-full" src="/arrow-down.png" alt="dropdown" />
              </div>
            </div>
          </div>
          {/* right faq */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 lg:gap-3 items-center">
              <h2 className="text-myPurple text-[14px] sm:text-[16px] lg:text-xl">Lorem ipsum dolor sit amet, consectetur adi elit.</h2>
              <div className="w-5 h-5">
                <img className="w-full object-cover h-full" src="/arrow-down.png" alt="dropdown" />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-3 items-center">
              <h2 className="text-myPurple text-[14px] sm:text-[16px] lg:text-xl">Lorem ipsum dolor sit amet, consectetur adi elit.</h2>
              <div className="w-5 h-5">
                <img className="w-full object-cover h-full" src="/arrow-down.png" alt="dropdown" />
              </div>
            </div>
            <div className="flex gap-2 lg:gap-3 items-center">
              <h2 className="text-myPurple text-[14px] sm:text-[16px] lg:text-xl">Lorem ipsum dolor sit amet, consectetur adi elit.</h2>
              <div className="w-5 h-5">
                <img className="w-full object-cover h-full" src="/arrow-down.png" alt="dropdown" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqTwo
