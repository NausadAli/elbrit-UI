import React from "react";
import Image from "next/image";
import Footer_banner from "./Footer_banner";

const Footer = () => {
  return (
    <div className="bg-[#17414F] text-white py-6 w-dvw ">
      <div className="flex items-center justify-around">
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
          subheading=" Ambassador Street, Zone 61,"
        />
      </div>

      <div className="flex justify-start items-center gap-x-40 ml-6 my-12">
        <div className="relative w-80 h-24 overflow-hidden">
          <Image
            src="/images/mainLogo.jpg" // Replace with your image path
            alt="Centered Image"
            layout="fill"             // Fill the container
            objectFit="cover"         // Ensure it doesn't overflow
            objectPosition="center"   // Focus on the center    // Optional: Tailwind styling
          />
        </div>
        <p className="font-jost">
          Your health, physical and emotional well-being is important <br />
          to us. We are always by your side and have made it even <br />
          easier for you to find the necessary vitamins.
        </p>
      </div>

      <div className="font-jost font-normal text-base flex items-center gap-2 ml-6">
        <Image src='/images/location.svg' alt="location logo" height={16} width={16}/>
        <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
      </div>
    </div>
  );
};

export default Footer;
