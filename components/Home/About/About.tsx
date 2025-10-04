import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import React from 'react'
import { FaGithub, FaGraduationCap, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <div id="about" className="pt-20 pb-16 bg-pureBlack">
      {/* SectionHeading  */}
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <div>
          {/* Text content  */}
          <h1
            className="text-bg py-3 text-[26px] sm:text-3xl md:text-4xl lg:text-4xl font-bold text-lowWhite"
            data-aos="fade-up-right"
          >
            {aboutInfo.title}
          </h1>

          {/* EDUCATION  */}
          <div className="flex items-center space-x-5 mt-4">
            <div
              className=" w-3/4 p-5 bg-highDark  rounded-xl"
              data-aos="fade-up-right"
            >
              <FaGraduationCap className="text-secondary text-5xl" />
              <p className="pt-2 text-lowWhite text-sm">BTech. IT</p>
              <p className="text-lowWhite text-sm">Govt. Engg College Idukki</p>
              <p className="text-secondary text-sm">
                CGPA : 7.64 (First Class)
              </p>
            </div>

            {/* LINKEDIN AND GITHUB  */}
            <div
              className="flex flex-col justify-between gap-3"
              data-aos="fade-up-right"
              data-aos-delay="300"
            >
              <a
                href="https://www.linkedin.com/in/vaishakpanakkat/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex p-5 bg-highDark rounded-full">
                  <FaLinkedin className="text-secondary font-bold text-3xl" />
                  {/* <p className="p-2 text-lowWhite">vaishakpanakkat</p> */}
                </div>
              </a>

              <a
                href="https://github.com/Vaishak-P"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex p-5 bg-highDark rounded-full">
                  <FaGithub className="text-secondary font-bold text-3xl" />
                  {/* <p className="p-2 text-lowWhite">vaishakpanakkat</p> */}
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          <p className="text-lowWhite text-lg mt-4 whitespace-pre-line">
            {aboutInfo.description}
          </p>
          {/* REACT ANIMATION LOGO  */}
        </div>
      </div>
    </div>
  );
}

export default About