"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};
const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-pureBlack">
      <Image
        src={`${service.icon}`}
        alt={service.title}
        width={1000}
        height={50}
        className="w-full h-auto rounded-md filter grayscale hover:filter-none"
      />
      <h1 className="mt-2 font-bold text-secondary">{service.title}</h1>
      <p className="text-lowWhite">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
