import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Slider from './Slider'

const Spotlight = () => {
  return (
    <div id="spotlight" className="pt-20 pb-16 bg-pureBlack">
      <SectionHeading>Spotlight</SectionHeading>
      <div className="w-[80%] sm:w-[80%] mx-auto mt-20">
        <Slider />
      </div>
    </div>
  );
}

export default Spotlight