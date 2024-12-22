import React from 'react'
import Blog_ele from './Blog_ele'

const Blog = () => {
  return (
    <div>

      <div className=' text-center my-2'>
         <h3 className='font-jost font-medium text-sm uppercase my-1'>
            Our Blog 
         </h3>
         <h1 className='font-jost font-semibold text-4xl'>
            Latest News
         </h1>
      </div>

       <div className="flex w-dvw justify-center gap-2 my-3">
        <div>
          <Blog_ele date ="21 Oct" text="The Covid Epidemic 2023 is back" img="/images/meds-1.png" img_alt="news image"/>
          <Blog_ele date ="02 Jan" text="The Covid Epidemic 2022 is back" img="/images/meds-2.png" img_alt="news image" heightClass="h-[24dvh]"/>
        </div> 
        <div>
          <Blog_ele date ="20 Jan" text="The Covid Epidemic is back again" img="/images/meds-2.png" img_alt="news image" heightClass="h-[24dvh]"/>
          <Blog_ele date ="20 Mar" text="The Covid Epidemic 2022 is back" img="/images/meds-1.png" img_alt="news image"/>
        </div> 
        <div>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2023 is back" img="/images/meds-1.png" img_alt="news image"/>
          <Blog_ele date ="20 Apr" text="The Covid Epidemic 2024 is back" img="/images/meds-2.png" img_alt="news image" heightClass="h-[24dvh]"/>
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
