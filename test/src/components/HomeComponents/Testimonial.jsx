const cardData = [
    {
        id:1,
        img:'/avatar.png',
        fullname:'Mr Belba Ngoy',
        testimony:'Always a remarkable experience for my team and myself'
    },
    {
        id:2,
        img:'/avatar.png',
        fullname:'Mr Belba Ngoy',
        testimony:'Always a remarkable experience for my team and myself'
    },
    {
        id:3,
        img:'/avatar.png',
        fullname:'Mr Belba Ngoy',
        testimony:'Always a remarkable experience for my team and myself'
    },
]

const Testimonial = () => {
  return (
    <section className="flex flex-col">
        {/* section title */}
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl">What Do Our Attendees Have To Say?</h1>
      </div>
      {/* left and right arrow */}
      <div className="flex items-center justify-between">
        <div>

        </div>
        <div>
            <h1 className="text-lg text-gray-500">Well See For Yourself!</h1>
        </div>
        <div className="flex gap-3 pr-6">
            <div className="w-14 h-14 border border-purple-300 rounded-full flex items-center justify-center">
                <img src="/arrow-left.png" alt="arrow" />
            </div>
            <div className="w-14 h-14  border-purple-300 border rounded-full flex items-center justify-center">
                <img src="/arrow-right.png" alt="arrow" />
            </div>
        </div>
      </div>
      {/* cards */}
      <div className="grid md:grid-cols-3 gap-3">
        {
            cardData.map((person)=>(
                <div key={person.id} className="flex flex-col gap-4 items-center justify-center">
                    <div className="w-36 h-36 rounded-full p-2 border border-myPurple">
                        <img className="object-cover w-full h-full" src={person.img} alt="img" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">{person.fullname}</h1>
                    </div>
                    <div>
                        <h2 className="text-[12px] sm:text-[14px] md:text-xl">{person.testimony}</h2>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Testimonial
