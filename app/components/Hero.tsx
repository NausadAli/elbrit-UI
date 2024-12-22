
import React from "react";
import Image from "next/image";
import Hero_sub from "./Hero_sub";

export default function Hero() {
   return (
      <section className="flex justify-center my-2 h-[95dvh] w-full">
         <div className="bg-[#E2F5EB] h-dvh w-[98dvw]">
            <div>
               <h1 className="font-jost text-center font-bold text-[9dvw] text-[#003569] mt-9">
                  Essential Vitamins
               </h1>
            </div>

            <div className="flex justify-center font-jost">
               <div className="w-3/12 my-auto">
                  <h2 className="my-2 text-[#727272] font-[300px] text-2xl">
                     Online Medical Supplies
                  </h2>
                  <h1 className="my-2 text-[#17414F] font-medium text-3xl">
                     Get Your Vitamins & Minerals
                  </h1>
                  <button className="my-3 uppercase bg-[#17414F] py-3 pl-8 pr-16 text-sm font-semibold text-white rounded-[2rem]">
                     Explore
                  </button>
               </div>

               <div className="relative bg-[#FFE9B5] w-72 h-80 rounded-tl-[40%] rounded-br-[40%] mr-4">
                  <Image
                     src="/images/hero-image.png"
                     alt="Illustration of essential vitamins"
                     fill={true}
                     objectFit="cover"
                     priority={true}
                     className="absolute scale-125 -mt-14 -ml-7"
                  />
               </div>

               <div className="w-[27%] my-auto ml-10 -mr-14">
                  <Hero_sub img="/images/hero-1.png" img_alt="vitamin icon" heading="Vitamins" subheading="Increased Vitamins and <br/> minerals in your diet"/>
                  <Hero_sub img="/images/hero-2.png" img_alt="weight loss icon" heading="Weight Loss" subheading="Weight Loss <br/> Find scientifically proven solutions"/>
                  <Hero_sub img="/images/hero-3.png" img_alt="food icon" heading="Functional Foods" subheading="Functional Foods <br/> From protein powers to baby formula"/>
               </div>
            </div>
         </div>
      </section>
   );
}
