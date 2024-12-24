import React from "react";
import Essential_sub from "./Essential_sub";
import Image from "next/image";

const Essentials = () => {
  return (
    <div className="w-11/12 md:h-[83dvh] h-auto m-auto px-4 sm:px-8">
      {/* First Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-4">
        <div className="font-jost my-2 sm:w-[40%] md:max-w-[30rem] ml-0 md:ml-3 text-center md:text-left">
          <h3 className="text-[#003569] uppercase font-medium pl-1">
            Ingredients
          </h3>
          <h1 className="text-[#17414F] font-semibold text-2xl md:text-4xl my-3">
            Better Ingredients
          </h1>
          <p className="text-[#727272] text-sm md:text-base">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </p>
        </div>
        <Essential_sub
          heading="Vitamin C"
          subheading="Vitamin C as ascorbic acid"
          img="/images/hero-image.png"
          img_alt="hero img"
        />
        <Essential_sub
          heading="Vitamin B3"
          subheading="Niacinn for healthy gut and skin"
          img="/images/hero-image.png"
          img_alt="hero img"
        />
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <Essential_sub
          heading="Magnesium"
          subheading="Boost energy and support muscle function"
          img="/images/hero-image.png"
          img_alt="hero img"
        />
        <Essential_sub
          heading="Hyaluric Acid"
          subheading="For smooth, supple and soft skin"
          img="/images/hero-image.png"
          img_alt="hero img"
        />
        <Essential_sub
          heading="Lactobacillus"
          subheading="Invigorate your gut microbiome"
          img="/images/hero-image.png"
          img_alt="hero img"
        />
        <div className="relative w-16 h-24 md:w-24 md:h-48 mt-4 md:mt-0 hidden lg:block">
          <Image
            src="/images/shape.png"
            alt="shape"
            layout="fill"
            loading="lazy"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Essentials;
