import { Button } from "../ui/button"
import {MenuIcon} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const NavMenu = [
  {
    pathname: 'Home',
    path: '/home'
  },
  {
    pathname: 'About Us',
    path: '/about-us'
  },
  {
    pathname: 'Gallery',
    path: '/gallery'
  }, {
    pathname: 'Contact Us',
    path: '/contact-us'
  },
]
const Navbar = () => {
  return (
    <nav className=" bg-white w-full  shadow-sm py-2 px-6 md:px-4 lg:px-16 flex 
    font-montserrat items-center justify-between">
      <div className="flex items-center gap-2">
        <img className="w-14 h-14" src="/logo.png" alt="logo" />
        <h1 className="font-bold text-xl">Founder Friday</h1>
      </div>
      <ul className=" md:pl-5 lg:pl-20 hidden md:flex items-center md:gap-4 lg:gap-10">
        {
          NavMenu.map((menu, index) => (
            <li className="text-[#9524FF]" key={index}>{menu.pathname}</li>
          ))
        }
      </ul>
      <div>
        <Button className='hidden  md:flex rounded-xl gap-1 bg-transparent border md:px-3 lg:px-6 py-5  border-[#9524FF]'>
          <h2 className=" text-[#9524FF]">
            Register
          </h2>
          <img src="/arrow.png" alt="arrow" />
        </Button>
        <DropdownMenu className="block md:hidden">
          <DropdownMenuTrigger className="block md:hidden">
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="block md:hidden">
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>About Us</DropdownMenuItem>
            <DropdownMenuItem>Gallery</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </nav>
  )
}

export default Navbar
