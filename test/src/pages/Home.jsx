import BannerSection from "@/components/HomeComponents/BannerSection"
import Community from "@/components/HomeComponents/Community"
import EightSection from "@/components/HomeComponents/EightSection"
import Faq from "@/components/HomeComponents/Faq"
import FaqTwo from "@/components/HomeComponents/FaqTwo"
import Footer from "@/components/HomeComponents/Footer"
import HeroSection from "@/components/HomeComponents/HeroSection"
import Navbar from "@/components/HomeComponents/Navbar"
import Sponsor from "@/components/HomeComponents/Sponsor"
import Testimonial from "@/components/HomeComponents/Testimonial"
import WhatHappens from "@/components/HomeComponents/WhatHappens"
import WhoWeAre from "@/components/HomeComponents/WhoWeAre"


const Home = () => {
  return (
    <section className="">
      <Navbar/>
      <HeroSection/>
      <WhoWeAre/>
      <Faq/>
      <WhatHappens/>
      <Sponsor/>
      <BannerSection/>
      <Community/>
      <EightSection/>
      <Testimonial/>
      <FaqTwo/>
      <Footer/>
    </section>
  )
}

export default Home
