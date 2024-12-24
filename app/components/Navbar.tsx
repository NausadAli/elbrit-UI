import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    

<nav className="">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
  <div className="relative w-40 h-8 overflow-hidden">
            <Image
              src="/images/mainLogo.jpg" 
              alt="Centered Image"
              layout="fill" 
              loading='lazy'
              objectFit="cover" 
              objectPosition="center" 
              />
          </div>
  <button type='button' className=" uppercase bg-[#17414F] py-2 px-6 lg:py-3 lg:pl-8 lg:pr-16 text-base font-semibold text-white rounded-[2rem]">
      Call to Actions
  </button>
  </div>
</nav>

  )
}

export default Navbar
