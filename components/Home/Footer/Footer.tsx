import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-primary">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className='flex justify-center font-semibold text-lowWhite '>Design with purpose, code with passion, and innovate endlessly!</div>
    </div>
  );
}

export default Footer