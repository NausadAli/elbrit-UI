import React from "react";
import Image from "next/image";
import Footer_banner from "./Footer_banner";

const Footer = () => {
  return (
    <div className="bg-[#17414F] text-white py-6 w-dvw">
      <div className="w-11/12 m-auto ">
        {/* Footer Banners */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-around">
          <Footer_banner 
            img="/images/footer-1.png"
            img_alt="phone image"
            heading="Phone Number"
            subheading="+974 3118 1843"
          />
          <Footer_banner
            img="/images/footer-2.png"
            img_alt="email image"
            heading="Email Address"
            subheading="Elbrithcqhr@gmail.com"
          />
          <Footer_banner
            img="/images/footer-3.png"
            img_alt="location image"
            heading="Office Location"
            subheading="Ambassador Street, Zone 61"
          />
        </div>

        {/* Logo and Text Section */}
        <div className="flex flex-col items-center gap-4 mt-8 lg:flex-row lg:justify-start lg:items-center lg:gap-x-40 lg:ml-16 lg:my-12 lg:w-[60%]">
          <div className="relative w-40 h-20 lg:w-52 lg:h-24 overflow-hidden">
            <Image
              src="/images/mainLogo.jpg" // Replace with your image path
              alt="Centered Image"
              layout="fill" // Fill the container
              objectFit="cover" // Ensure it doesn't overflow
              objectPosition="center" // Focus on the center
            />
          </div>
          <p className="text-center text-sm font-jost lg:text-left lg:text-base">
            Your health, physical and emotional well-being is important <br />
            to us. We are always by your side and have made it even <br />
            easier for you to find the necessary vitamins.
          </p>
        </div>

        {/* Address Section */}
        <div className="flex flex-col items-center gap-2 mt-4 lg:flex-row lg:items-center lg:gap-2 lg:ml-16">
          <Image
            src="/images/location.svg"
            alt="location logo"
            height={16}
            width={16}
          />
          <p className="text-center text-sm font-jost lg:text-left lg:text-base">
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
