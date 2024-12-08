import { Input } from "../ui/input"
import { Button } from "../ui/button"
const chartData = [
    {
        id:1,
        bgColor:'#DCB6FF',
        borderColor:'#A649FF',
        header:'Networking Opportunities',
        text:'Connect with industry leaders, founders, and potential partners.'
    },
    {
        id:2,
        bgColor:'#EDDBFF',
        borderColor:'#A649FF',
        header:'Community Impact',
        text:'Support the growth and development of the startup ecosystem.'
    },
    {
        id:3,
        bgColor:'#EDDBFF',
        borderColor:'#A649FF',
        header:'Brand Association',
        text:'Align your brand with innovation and entrepreneurial success.'
    },
    {
        id:4,
        bgColor:'#DCB6FF',
        borderColor:'#A649FF',
        header:'Visibility',
        text:'Gain exposure to a targeted audience of young professionals and entrepreneurs.'
    },
]
const Sponsor = () => {
  return (
    <section className="flex  md:mt-0 font-montserrat flex-col">
        {/* div for header and paragraph */}
      <div className="flex flex-col md:flex-row justify-between px-8">
        <div className="w-full md:w-1/2">
            <h2 className="font-semibold text-center md:text-start text-lg text-[#9524FF]">Sponsor The Next Friday</h2>
            <h1 className="text-center md:text-start text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-bold">
            Why Sponsor <br/>Founders Friday?
            </h1>
        </div>
        <div className="w-full md:w-1/2">
            <p className="text-center md:text-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, 
            facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo 
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
        </div>
      </div>
      {/* div for 4-circles and sponsor form */}
      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10 xl:gap-24 py-6 px-2 sm:px-16 md:px-4 lg:px-8 xl:px-20">
        {/* circle chart */}
        <div className="p-2 lg:p-4 w-full md:w-[70%] lg:w-1/2 xl:w-[40%] flex items-center 
        justify-center shadow-md border 
        border-myPurple rounded-md">
            <div className="grid grid-cols-2 gap-2 ">
                {chartData.map((item)=>(
                    <div key={item.id}
                    style={{
                        backgroundColor: item.bgColor,
                        borderColor: item.borderColor,
                    }} 
                    className='flex flex-col p-2 items-center justify-center 
                    w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full border-2'>
                        <h1 className="font-bold text-[12px] sm:text-[16px] md:text-[20px] text-center">{item.header}</h1>
                        <h2 className="text-center text-[8px] sm:text-[12px] md:text-[16px]">{item.text}</h2>
                    </div>
                ))}
            </div>
        </div>
        {/* sponsor form */}
        <div className="flex mt-4 md:mt-0 w-full md:w-1/2 flex-col gap-3">
            <div>
                <h1 className="font-semibold text-center md:text-start">How To Sponsor</h1>
                <h2 className=" italic text-center md:text-start">Ready to Make an Impact?</h2>
                <p className="text-center md:text-start">Fill out the form below or contact us at [contact email/phone number] 
                to learn more about how you can sponsor the next Founders Friday</p>
            </div>
            <form className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 grid-cols-1" action="">
                <div className="flex flex-col gap-1">
                    <label className='font-semibold' htmlFor="">Name</label>
                    <Input placeholder='name'/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='font-semibold flex gap-1' htmlFor="">Company <p className="font-normal">[Optional]</p></label>
                    <Input placeholder='company'/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='font-semibold' htmlFor="">Email</label>
                    <Input placeholder='email'/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='font-semibold' htmlFor="">Phone</label>
                    <Input placeholder='phone'/>
                </div>
            </form>
            <Button className='w-[280px] mt-3 md:mt-0 md:w-[200px] lg:w-[190px] flex rounded-md 
            gap-1 lg:gap-2 p-0 md:px-4 py-6 md:py-5 lg:px-3 lg:py-6 bg-myPurple'>
              <p className="text-white md:text-[15px] lg:text-lg">
              Sponsor
              </p>
              <div className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6">
              <img className="h-full w-full object-cover" src="/new.png" alt="arrow" />
              </div>
            </Button>
        </div>
      </div>
    </section>
  )
}

export default Sponsor
