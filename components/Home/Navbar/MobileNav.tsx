import React from 'react'
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from 'react-icons/cg';

type Props = { //props can be replaced with any name
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({showNav,closeNav}:Props) => {
  const navOpen = showNav?'translate-x-0':'-translate-x-full';
  return (
    <div>
      {/* Overlay  */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks  */}
      <div className={`text-lowWhite fixed ${navOpen} transform transition-all duration-500 delay-200 justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[2000]`}>
        {navLinks.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url}>
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] border-lowWhite sm:text[30px]">
                {navlink.label}
              </p>
            </Link>
          );
        })}
        {/* Close button  */}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-lowWhite" />
      </div>
    </div> 
  );
}

export default MobileNav