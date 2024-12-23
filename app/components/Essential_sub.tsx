import React from 'react'
import Image, {StaticImageData} from 'next/image';

type EssentialProps={
      img : StaticImageData| string,
      img_alt : string,
      heading : string,
      subheading: string
}
const Essential_sub: React.FC<EssentialProps> = ({ img, img_alt, heading, subheading }) => {
   return (
     <div className="bg-[#E2F5EB] rounded-lg mx-1 my-2 px-7 py-6 w-[340px] h-[200px] shadow-md flex flex-col justify-between relative font-jost">
       <div>
         <h1 className="text-[#2D3F59] font-semibold text-xl">{heading}</h1>
         <p className="text-[#727272] text-base mt-1 leading-relaxed">{subheading}</p>
       </div>
       <button className="text-[#003569] text-left font-bold mt-6 mb-1 hover:underline">See More</button>
       <div className="absolute bottom-4 right-4 w-20 h-20">
         <Image src={img} alt={img_alt} layout="fill" objectFit="contain" />
       </div>
     </div>
   );
 };

export default Essential_sub
