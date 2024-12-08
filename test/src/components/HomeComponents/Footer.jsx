import { Button } from "../ui/button"

const Footer = () => {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center pl-5 py-5">
        <img src="/logo2.png" alt="logo" />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-2xl text-center md:text-3xl">Want To Be A Part Of Abuja's Biggest Tech <br/> Community?</h1>
            <Button className='w-[220px] mt-3 md:mt-0 md:w-[280px] lg:w-[300px] flex rounded-xl 
                gap-1 lg:gap-2 p-0 md:px- py-3 md:py-5 lg:px-4
                border border-myPurple'>
                <p className="text-myPurple md:text-[15px] lg:text-lg">
                Register For Our Next Event
                </p>
                <div className="w-6 h-6 md:w-6 md:h-6 lg:w-8 lg:h-8">
                <img className="h-full w-full object-cover" src="/arrow3.png" alt="arrow" />
                </div>
            </Button>
        </div>
      </div>
      <div className="mx-20 border border-b-2 border-gray-300 my-6">
      </div>
      {/* lower footer */}
      <div className="flex items-center justify-between px-5 mb-5">
        {/* left div */}
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-myPurple flex items-center justify-center">
                <img src="/fb.png" alt="socials" />
            </div>
            <div className="w-8 h-8 rounded-full bg-myPurple flex  items-center justify-center">
                <img src="/instagram.png" alt="socials" />
            </div>
            <div className="w-8 h-8 rounded-full bg-myPurple flex  items-center justify-center">
                <img src="/twitter.png" alt="socials" />
            </div>
        </div>
        {/* right div */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
