import React from 'react'
import Essential_sub from './Essential_sub'
import Image from 'next/image';

const Essentials = () => {
  return (
    <div className='w-10/12 h-[60dvh] m-auto px-8 mb-20'>
      <div className='flex justify-center items-center gap-5 my-2'>
         <div className='font-jost my-2 w-[40%] ml-3'>
            <h3 className='text-[#0003569] uppercase font-medium pl-1'>Ingredients</h3>
            <h1 className='text-[#17414F] font-semibold text-4xl my-3'>Better Ingredients</h1>
            <p className='text-[#727272]'>
            Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! 
            </p>
         </div>
         <Essential_sub heading='Vitamin C' subheading='Vitamin C as ascorbic acid' img='/images/hero-image.png' img_alt='hero img'/>
         <Essential_sub heading='Vitamin C' subheading='Vitamin C as ascorbic acid' img='/images/hero-image.png' img_alt='hero img'/>
      </div>
      <div className='flex justify-center items-center gap-6'>
         <Essential_sub heading='Vitamin C' subheading='Vitamin C as ascorbic acid' img='/images/hero-image.png' img_alt='hero img'/>
         <Essential_sub heading='Vitamin C' subheading='Vitamin C as ascorbic acid' img='/images/hero-image.png' img_alt='hero img'/>
         <Essential_sub heading='Vitamin C' subheading='Vitamin C as ascorbic acid' img='/images/hero-image.png' img_alt='hero img'/>
         <div className='relative w-24 h-48'>
            <Image src='/images/shape.png' alt='shape' layout="fill" objectFit="contain"/>
         </div>
      </div>
    </div>
  )
}

export default Essentials
