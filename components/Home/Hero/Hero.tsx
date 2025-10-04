import { BaseInfo } from '@/Data/data'
import Image from 'next/image';
import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-highDark overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content  */}
          <div>
            <h1
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-delay="200"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-lowWhite font-semibold"
            >
              {BaseInfo.name}
            </h1>
            {/* //text-bg is custom class defined on globals.css  */}
            <h1
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-delay="400"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
                    md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-lowWhite"
            >
              {BaseInfo.position}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"
              data-aos-delay="600"
              className="mt-6 text-sm md:text-base text-lowWhite text-opacity-80"
            >
              {BaseInfo.description}
            </p>
            <a href="/Resume.pdf" download="Vaishak_P_Resume.pdf">
              <button
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-delay="800"
                className="md:px-8 md:py-2.5 px-6 py-1.5 text-lowWhite font-semibold text-sm md:text-lg
             transition-all duration-200 rounded-lg mt-8 bg-primary hover:bg-secondary hover:text-highDark flex items-center gap-x-3"
              >
                Download Resume
                <FaDownload />
              </button>
            </a>
          </div>
          {/* Image Content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] shadow-lg  shadow-primary overflow-x-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero