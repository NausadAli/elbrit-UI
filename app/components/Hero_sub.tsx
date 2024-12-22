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
    <section className='flex my-4 justify-center items-center gap-3 pl-4'>
        
         <Image src={img} alt={img_alt} width={70} height={70} />       
         <div className='w-full my-1'>
            <h1 className='text-[#17414F] font-jost text-2xl font-bold'>{heading}</h1>
            <p className='text-[#727272] font-roboto font-light text-sm'dangerouslySetInnerHTML={{ __html: subheading }} />
         </div>
    </section>
  )
}

export default Hero_sub
