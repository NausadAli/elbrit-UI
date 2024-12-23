import React from 'react'
import About_ele from './About_ele'

const About = () => {
  return (
    <div className=' w-dvw h-dvh mt-9'>
    
     <div className='relative bg-[#17414F] w-11/12 h-3/5 rounded-[5rem] m-auto'>
         <div className='absolute -mt-12 inset-0 '>
            <div className='flex justify-center items-center'>
               <About_ele img='/images/about-1.png' img_alt='about-image1' heading='Clinically Studied' subheading='All products that we offer have undergone lab and safety tests'/>
               <About_ele img='/images/about-2.png' img_alt='about-image2' heading='Clinically Studied' subheading='All products that we offer have undergone lab and safety tests'/>
               <About_ele img='/images/about-3.png' img_alt='about-image3' heading='Clinically Studied' subheading='All products that we offer have undergone lab and safety tests'/>
            </div>
            <div className='flex justify-center items-center'>
               <About_ele img='/images/about-4.png' img_alt='about-image4' heading='Clinically Studied' subheading='All products that we offer have undergone lab and safety tests'/>
               <About_ele img='/images/about-5.png' img_alt='about-image5' heading='Clinically Studied' subheading='All products that we offer have undergone lab and safety tests'/>
               <About_ele img='/images/about-6.png' img_alt='about-image6' heading='Clinically Studied' subheading='All products that we offer have undergone lab and safety tests'/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
