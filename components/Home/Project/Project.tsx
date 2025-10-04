import SectionHeading from '@/components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// type Props = {
//   project:{
//     id:number;
//     title:string;
//     image:string;
//     url:string;
//   }
// }

const Project = () => {
  return (
    <div id="projects" className="pt-20 pb-16 bg-pureBlack" >
      <SectionHeading>Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => {
          return (
            <div
              key={project.id}
              className="group bg-highDark p-6 rounded-lg hover:scale-105 transition-all duration-300"
              data-aos="zoom-out-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  className="w-full border-2 border-lowWhite rounded-lg"
                  height={300}
                  width={300}
                />
                <h1 className="mt-2 font-bold text-lowWhite group-hover:text-secondary transition-all duration-500">
                  {project.title}
                </h1>
                <p className=' group-hover:opacity-100 transition-all tracking-[3px] bg-lowWhite opacity-70 py-1 px-5 mt-2 rounded-lg text-sm w-fit'>VISIT</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project