import React from 'react'
import About_ele from './About_ele'

const About = () => {
  return (
    <div className=' w-dvw h-dvh -mt-12'>
    
     <div className='relative bg-[#17414F] w-10/12 h-[28rem] rounded-[5rem] m-auto '>
         <div className='absolute -mt-12 inset-0 '>
            <div className='flex justify-center items-center'>
               <About_ele img='/images/about-1.png' img_alt='about-image1' heading='Clinically Studied' subheading='All products that we offer have undergone lab and safety tests'/>
               <About_ele img='/images/about-2.png' img_alt='about-image2' heading='Vegetarian Friendly' subheading='We have a wide selection of vegetarian products to meet your needs'/>
               <About_ele img='/images/about-3.png' img_alt='about-image3' heading='Made In India' subheading='Shop local and explore health products made right here in India'/>
            </div>
            <div className='flex justify-center items-center'>
               <About_ele img='/images/about-4.png' img_alt='about-image4' heading='Free Shipping' subheading='We deliver to your door with no shipping costs on your orders'/>
               <About_ele img='/images/about-5.png' img_alt='about-image5' heading='No Risk' subheading='We ensure that all products are safe and within their use-by date'/>
               <About_ele img='/images/about-6.png' img_alt='about-image6' heading='GMO Free' subheading='Natural, no modified products and derivatives for those who need it'/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
