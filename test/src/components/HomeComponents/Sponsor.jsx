
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
    <section className="flex font-montserrat flex-col">
        {/* div for header and paragraph */}
      <div className="flex justify-between px-8">
        <div className="w-1/2">
            <h2 className="font-semibold text-lg text-[#9524FF]">Sponsor The Next Friday</h2>
            <h1 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold">
            Why Sponsor <br/>Founders Friday?
            </h1>
        </div>
        <div className="w-1/2">
            <p className="text-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, 
            facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo 
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas. 
            </p>
        </div>
      </div>
      {/* div for 4-circles and sponsor form */}
      <div className="flex justify-between px-10 py-5">
        {/* circle chart */}
        <div className="p-4 grid grid-cols-2 gap-2 shadow-md border border-myPurple rounded-md">
            {chartData.map((item)=>(
                <div key={item.id}
                style={{
                    backgroundColor: item.bgColor,
                    borderColor: item.borderColor,
                  }} 
                className='flex flex-col p-2 items-center justify-center w-60 h-60 rounded-full border-2'>
                    <h1 className="font-bold">{item.header}</h1>
                    <h2 className="text-center">{item.text}</h2>
                </div>
            ))}
        </div>
        {/* sponsor form */}
        <div>

        </div>
      </div>
    </section>
  )
}

export default Sponsor
