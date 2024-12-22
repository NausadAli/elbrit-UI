import React from 'react'
import Image, { StaticImageData } from 'next/image'

type BlogProps = {
   date: string,
   text: string,
   img: StaticImageData | string,
   img_alt: string,
   heightClass?: string
}

const Blog_ele: React.FC<BlogProps>  = ({date, text, img, img_alt, heightClass}) => {
  return (
    <div className='relative text-white py-2'>
      <div className='absolute font-jost px-4 py-1 pl-4 w-20 text-sm font-normal z-20 bg-[#003569] top-5 ml-1.5 rounded-r-full'>
         {date}
      </div>
      <div className={`relative w-[20dvw] ${heightClass || 'h-[46dvh]'} overflow-hidden rounded-xl ml-4`}>
         <div className='absolute w-full z-10 top-12 flex justify-center px-8'>
            <div className='font-jost text-lg font-semibold'>
               {text}
            </div>
         </div>
         <Image src={img} 
            alt={img_alt}
            layout='fill'
            objectFit='cover'
            objectPosition= 'center'
         />
      </div>
    </div>
  )
}

export default Blog_ele
