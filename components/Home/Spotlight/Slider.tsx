"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1
  } 
};
import React from "react";
import { spotlight } from "@/Data/data";
import SpotlightCard from "./SpotlightCard";

const Slider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite
      responsive={responsive}
    >
      {spotlight.map((spotlight)=>{
        return <div key={spotlight.id}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <SpotlightCard spotlight={spotlight}/>
        </div>
      })}
    </Carousel>
  );
};

export default Slider;
