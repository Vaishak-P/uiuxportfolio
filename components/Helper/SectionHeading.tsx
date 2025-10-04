import React, { ReactNode } from 'react'

type Props={
    children:ReactNode;
}
const SectionHeading = ({children}:Props) => {
  return (
    <h1
      className="font-bold bg-secondary w-fit text-center px-8 py-3 mx-auto text-lowDark text-2xl sm:text-3xl uppercase rounded-full "
      data-aos="zoom-out-up"
    >
      {children}
    </h1>
  );
}

export default SectionHeading