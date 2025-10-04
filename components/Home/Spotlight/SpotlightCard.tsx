import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from 'react-icons/fa';

type Props = {
    spotlight:{
        id:number;
        title:string;
        link:string;
        image:string;
    }
}
const SpotlightCard = ({spotlight}:Props) => {
    const {title,link,image}=spotlight
  return (
    <div className="rounded-lg overflow-hidden bg-highDark flex justify-center items-center w-[350px] h-[350px] relative">
      <div className="p-5 group">
        <Link href={link} target="_blank">
          <Image src={image} alt={title} width={300} height={300}></Image>
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
          <div className="absolute bottom-10 left-10 w-[80%] flex flex-col">
            <FaLinkedin className="group-hover:scale-150 group-hover:translate-x-1.5 transition-all text-3xl text-secondary"></FaLinkedin>
            <h1 className="text-base text-lowWhite shadow-lg font-semibold mt-2">
              {title}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SpotlightCard