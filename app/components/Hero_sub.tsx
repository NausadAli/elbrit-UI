// 'use-client'

import Image,{ StaticImageData } from 'next/image';
import React from 'react';

type HeroProps = {
   img: StaticImageData | string,
   img_alt: string,
   heading: string,
   subheading : string
}

const Hero_sub: React.FC<HeroProps>= ({img, img_alt, heading, subheading}) => {
  return (
    <section className='flex my-4 justify-center items-center gap-5 xl:-ml-6 md:pl-1 pl-4'>
        
         <Image src={img} alt={img_alt} width={60} height={60} loading='lazy'/>       
         <div className='w-[99%] my-2'>
            <h1 className='text-[#17414F] font-jost xl:text-2xl lg:text-xl text-2xl font-bold md:pt-1 pt-2 sm:ml-0 ml-2'>{heading}</h1>
            <p className='text-[#727272] font-jost font-normal md:px-0 px-2 text-base'dangerouslySetInnerHTML={{ __html: subheading }} />
         </div>
    </section>
  )
}

export default Hero_sub
