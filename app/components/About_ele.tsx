import Image, { StaticImageData } from "next/image";
import React from "react";

type AboutProps = {
  img: StaticImageData | string;
  img_alt: string;
  heading: string;
  subheading: string;
};

const About_ele: React.FC<AboutProps> = ({ img, img_alt, heading, subheading }) => {
  return (
    <div className="w-full px-4 py-4 m-2 sm:px-10">
      <div className="text-white font-jost text-center">
        <Image
          className="m-auto"
          src={img}
          alt={img_alt}
          width={60}
          height={60}
          sizes="(max-width: 768px) 60px, (max-width: 1024px) 80px, 80px" 
        />
        <h1 className="font-medium text-xl md:text-2xl my-3">{heading}</h1>
        <p className="font-light text-sm md:text-base sm:p-1 px-3">{subheading}</p>
      </div>
    </div>
  );
};

export default About_ele;
