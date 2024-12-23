import React from 'react';
import Image, { StaticImageData } from 'next/image';

type BannerProps = {
   img: StaticImageData | string,
   img_alt: string,
   heading: string,
   subheading: string
}

const Footer_banner: React.FC<BannerProps> = ({ img, img_alt, heading, subheading }) => {
  return (
    <div className="bg-[#215D72] text-white flex items-center w-full sm:w-[360px] h-auto sm:h-[100px] rounded-[15px] gap-5 p-3 sm:p-5">
      <div className="flex-shrink-0">
        <Image
          className="ml-4 sm:ml-6"
          src={img}
          alt={img_alt}
          width={50}
          height={50}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-jost text-sm sm:text-lg font-light">{heading}</h2>
        <h1 className="font-jost text-base sm:text-lg font-medium">{subheading}</h1>
      </div>
    </div>
  );
};

export default Footer_banner;
