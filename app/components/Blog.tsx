import React from 'react'
import Blog_ele from './Blog_ele'

const Blog = () => {
  return (
    <div>

      <div className=' text-center my-2'>
         <h3 className='font-jost font-semibold text-base'>
            Our Blog 
         </h3>
         <h1 className='font-jost font-semibold text-5xl'>
            Latest News
         </h1>
      </div>

       <div className="flex w-dvw justify-center gap-2 my-3">
        <div>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-1.png" img_alt="news image"/>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-2.png" img_alt="news image" heightClass="h-[24dvh]"/>
        </div> 
        <div>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-2.png" img_alt="news image" heightClass="h-[24dvh]"/>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-1.png" img_alt="news image"/>
        </div> 
        <div>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-1.png" img_alt="news image"/>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-2.png" img_alt="news image" heightClass="h-[24dvh]"/>
        </div> 
        <div>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-2.png" img_alt="news image" heightClass="h-[24dvh]"/>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-1.png" img_alt="news image"/>
        </div>         
      </div>
    </div>
  )
}

export default Blog
