import React, { useEffect } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

//define prop types
type Props ={
    openNav:()=>void
}

const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = React.useState(false);
  useEffect(() => {
    const handler = () => {
      if(window.scrollY >= 90){
        setNavBg(true);
      }
      if(window.scrollY < 90){
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  },[]);
  return (
    <div className={`fixed ${navBg ? "bg-primary/80":"bg-highDark"} backdrop-blur-lg h-[12vh] z-[10]  w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-80% mx-auto">
        {/* LOGO  */}
        <Image 
          src="/images/logo.png"
          alt="LOGO"
          width={100}
          height={100}
          className="ml-[-1.5rem] sm:ml-[0]"
        />
        {/* Nav Links  */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Button */}
          <div className='flex items-center space-x-4'>
            <a href='mailto:vaishakpanakkat@gmail.com?subject=Hiring&body=Hi Vaishak, I would like to hire you for my project.'>
              <button className='md:px-10 md:py-2 px-8 py-3 text-primary font-semibold sm:text-base text-sm bg-lowWhite
              hover:text-lowWhite hover:bg-primary hover:border-lowWhite hover:border-2 transition-all duration-200 rounded-lg'>
                  Hire Me 
              </button>
            </a>
            {/* Burger  */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer lg:hidden text-lowWhite'/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav