import Image, { StaticImageData } from 'next/image'
import React from 'react'

type AboutProps={
   img : StaticImageData| string,
   img_alt : string,
   heading : string,
   subheading: string
}


const About_ele : React.FC<AboutProps>= ({img,img_alt, heading, subheading}) => {
  return (
   <div className=''>
      <div className='text-white font-jost text-center w-full px-20 py-2 m-2'>
         <Image className='m-auto' src={img} alt={img_alt} width={80} height={80}/>
         <h1 className='font-medium text-2xl my-3'>{heading}</h1>
         <p className='font-light text-base'>{subheading}</p> 
      </div>
   </div>
  )
}

export default About_ele
