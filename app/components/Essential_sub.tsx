import React from "react";
import Image, { StaticImageData } from "next/image";

type EssentialProps = {
  img: StaticImageData | string;
  img_alt: string;
  heading: string;
  subheading: string;
};

const Essential_sub: React.FC<EssentialProps> = ({
  img,
  img_alt,
  heading,
  subheading,
}) => {
  return (
    <div className="bg-[#E2F5EB] rounded-lg mx-2 my-3 px-5 py-5 w-[90%] sm:w-[340px] h-auto sm:h-[200px] shadow-md flex flex-col sm:justify-between relative font-jost">
      <div>
        <h1 className="text-[#2D3F59] font-semibold text-lg sm:text-xl">{heading}</h1>
        <p className="text-[#727272] text-sm sm:text-base mt-2 sm:mt-1 leading-relaxed">
          {subheading}
        </p>
      </div>
      <button className="text-[#003569] text-left font-bold mt-4 sm:mt-6 hover:underline">
        See More
      </button>
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-16 h-16 sm:w-20 sm:h-20">
        <Image src={img} alt={img_alt} layout="fill" objectFit="contain" loading="lazy"/>
      </div>
    </div>
  );
};

export default Essential_sub;
