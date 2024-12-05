import HeroSection from "@/components/HomeComponents/HeroSection"
import Navbar from "@/components/HomeComponents/Navbar"
import WhoWeAre from "@/components/HomeComponents/WhoWeAre"


const Home = () => {
  return (
    <section className="">
      <Navbar/>
      <HeroSection/>
      <WhoWeAre/>
    </section>
  )
}

export default Home
