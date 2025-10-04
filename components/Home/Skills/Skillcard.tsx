import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
  };
};
const SkillCard = ({ skill }: Props) => {
  const { image, title } = skill;
  return (
    <div
      className="p-6 hover:bg-primary duration-300 transition-all cursor-pointer text-center rounded-lg
    bg-lowDark"
    >
      <Image
        src={image}
        alt={title}
        width={50}
        height={50}
        className="object-cover mx-auto filter invert"
      />
      <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
    </div>
  );
};

export default SkillCard;
