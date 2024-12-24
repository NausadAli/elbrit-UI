import React from "react";
import Image from "next/image";
import Hero_sub from "./Hero_sub";

export default function Hero() {
   return (

       <div className="flex justify-center m-2 lg:h-[120dvh] md:h-[185dvh] sm:h-[191dvh] h-[185dvh] -mb-12">
         <div className="bg-[#E2F5EB] sm:h-[220dvh] h-[195dvh] w-full">
            <div>
               <h1 className="font-jost text-[#003569] text-center font-extrabold 2xl:text-[900%] xl:text-[780%] lg:text-[650%] md:text-[485%] sm:text-[385%] text-[10dvw]  mt-9">
                  Essential Vitamins
               </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center font-jost gap-8">
              
               <div className="max-w-80 w-10/12 lg:w-3/12 my-2 text-center lg:text-left">
                  <h2 className="my-2 text-[#727272] font-light text-lg sm:text-xl">
                     Online Medical Supplies
                  </h2>
                  <h1 className="my-2 text-[#17414F] font-medium text-xl sm:text-2xl">
                     Get Your Vitamins & Minerals
                  </h1>
                  <button className="my-3 uppercase bg-[#17414F] py-2 px-6 lg:py-3 lg:pl-8 lg:pr-16 text-sm font-semibold text-white rounded-[2rem]">
                     Explore
                  </button>
               </div>


               <div className="relative bg-[#FFE9B5] w-60 h-60 sm:w-72 sm:h-80 rounded-tl-[40%] rounded-br-[40%] flex-shrink-0 md:ml-10">
                  <Image
                     src="/images/hero-image.png"
                     alt="Illustration of essential vitamins"
                     fill={true}
                     objectFit="cover"
                     // priority={true}
                     loading="lazy"
                     className="absolute scale-135 sm:scale-125 -mt-[2.5rem] md:-mt-[1.5rem] lg:-mt-[6rem]"
                  />
               </div>


               <div className="md:w-80 lg:w-[27%] lg:ml-10 md:pl-10">
                  <Hero_sub
                     img="/images/hero-1.png"
                     img_alt="vitamin-icon"
                     heading="Vitamins"
                     subheading="Increased Vitamins and <br/> minerals in your diet"
                  />
                  <Hero_sub
                     img="/images/hero-2.png"
                     img_alt="weight-loss-icon"
                     heading="Weight Loss"
                     subheading="Weight Loss <br/> Find scientifically proven solutions"
                  />
                  <Hero_sub
                     img="/images/hero-3.png"
                     img_alt="food-icon"
                     heading="Functional Foods"
                     subheading="Functional Foods <br/> From protein powers to baby formula"
                  />
               </div>

            </div>

         </div>
      </div>
   );
}
