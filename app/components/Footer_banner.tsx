import React from 'react';
import Image, { StaticImageData } from 'next/image';

type BannerProps = {
   img: StaticImageData | string,
   img_alt: string,
   heading: string,
   subheading: string
}

const Footer_banner: React.FC<BannerProps> = ({img, img_alt, heading, subheading}) => {
  return (
    <div className='bg-[#215D72] text-white flex items-center justify-start w-[435px] h-[100px] rounded-[15px] '>
      <Image className='ml-12' src={img} alt={img_alt} width={60} height={61}/>
      <div className='pl-[45px] px-1'>
      <h2 className='font-jost text-xl font-normal'>{heading}</h2>
      <h1 className='font-jost text-xl font-medium'>{subheading}</h1>
      </div>
    </div>
  )
}

export default Footer_banner;
