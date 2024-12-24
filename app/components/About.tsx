import React from "react";
import About_ele from "./About_ele";

const About = () => {
  return (
    <div className="w-full lg:max-h-[75dvh] md:h-[105dvh] sm:h-[110dvh] mb-20 mt-3">
      <div className="relative bg-[#17414F] lg:max-w-[77rem] sm:w-10/12 w-11/12 lg:max-h-[30rem] sm:h-[105dvh] h-[1310px] rounded-3xl m-auto p-4 sm:p-10">
        <div className="absolute grid lg:grid-cols-3 sm:grid-cols-2 gap-4 sm:gap-2 text-center md:-left-2 sm:-mt-[90px] -mt-16 -left-2 ">
          <About_ele
            img="/images/about-1.png"
            img_alt="clinically-studied-icon"
            heading="Clinically Studied"
            subheading="All products that we offer have undergone lab and safety tests"
          />
          <About_ele
            img="/images/about-2.png"
            img_alt="vegetarian-friendly-icon"
            heading="Vegetarian Friendly"
            subheading="We have a wide selection of vegetarian products to meet your needs"
          />
          <About_ele
            img="/images/about-3.png"
            img_alt="made-in-india-icon"
            heading="Made In India"
            subheading="Shop local and explore health products made right here in India"
          />
        {/* </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 sm:gap-6 text-center mt-6"> */}
          <About_ele
            img="/images/about-4.png"
            img_alt="free-shipping-icon"
            heading="Free Shipping"
            subheading="We deliver to your door with no shipping costs on your orders"
          />
          <About_ele
            img="/images/about-5.png"
            img_alt="no-risk-icon"
            heading="No Risk"
            subheading="We ensure that all products are safe and within their use-by date"
          />
          <About_ele
            img="/images/about-6.png"
            img_alt="gmo-free-icon"
            heading="GMO Free"
            subheading="Natural, no modified products and derivatives for those who need it"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
